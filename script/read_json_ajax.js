var xMLHttpRequest = new XMLHttpRequest();

xMLHttpRequest.onload = function () {
    if (xMLHttpRequest.status === 200) {
        responseObject = JSON.parse(xMLHttpRequest.responseText);
        var articleContent = '<div class="flex-container">';
        var count = 1;
        for (var i = 0; i <responseObject.articles.length; i++){
            const toReadMore = '<span id="dots'+count+'">...</span><span id="more'+count+'">';
            articleContent += '<article class=\"art-'+count+'\">';
            articleContent += '<img src=\"'+responseObject.articles[i].image+'\">';
            articleContent += '<h1>'+responseObject.articles[i].title+'</h1>';
            articleContent += '<p>'+responseObject.articles[i].text+toReadMore+responseObject.articles[i].more+'</span></p>';
            articleContent += '<button onclick=\"read_more'+count+'()\" id=\"myBtn'+count+'\">Read more</button>';
            articleContent += '</article>';
            count++;
        }
        document.getElementById('article_content').innerHTML = articleContent+'</div>';
    }
};
xMLHttpRequest.open('GET', 'json/data.json', true);
xMLHttpRequest.send(null);