    <!-- List of RSS feeds to pull
    http://feeds.feedburner.com/ThePositivityblog-PutSomePersonalDevelopmentAndPositivityIntoYourLif
    -->

//docs for google feed api https://developers.google.com/feed/v1/devguide#setResultFormat

    google.load("feeds", "1");

    function initialize() {

      var feed = new google.feeds.Feed("http://mirthandmotivation.com/feed/");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            addToSlider(null, entry.title, entry.contentSnippet, entry.link);
            // var div = document.createElement("div");
            // div.appendChild(document.createTextNode(entry.title));
            // div.innerHTML = entry.content;
            // container.appendChild(div);
          }
        }else{
          alert("error with mirth feed");
        }
      });

      var positivityFeed = new google.feeds.Feed("https://www.reddit.com/r/Positive/.rss");
      positivityFeed.load(function(result) {
        if (!result.error) {
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            // var div = document.createElement("div");
            // div.appendChild(document.createTextNode(entry.title));
            addToSlider(null, entry.title, entry.contentSnippet), entry.link;
            // div.innerHTML = entry.content;
            // container.appendChild(div);
          }
        }else{
          alert("error with positivity feed");
        }
      });
      
      var redditFeed = new google.feeds.Feed("http://www.reddit.com/r/GetMotivated.rss");
      redditFeed.load(function(result) {
        if (!result.error) {
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            // var div = document.createElement("div");

            // div.innerHTML = entry.content;

            if(entry.title.indexOf("[Image]") > -1){
            imageLink = $(entry.content).find("a:contains('[link]')").attr('href');
              // image = $(entry.content).find('img').attr('src');
              console.log(imageLink);
              addToSlider(imageLink, entry.title, entry.contentSnippet, entry.link);
              // imageItem = document.createElement("img");
              // imageItem.src = imageLink;
              // div.appendChild(imageItem);
            }else{
              addToSlider(null, entry.title, entry.contentSnippet, entry.link);
            }
            // div.innerHTML = entry.content;
            // link = entry.link;
            // container.appendChild(div);
          }
        }else{
          alert("error fetching reddit feed");
        }
      });
    }

    function addToSlider(imageUrl, title, text, link){
      //generate the new list item
      var item = document.createElement("li");
      url = document.createElement("a");
      url.href = link;
      image = document.createElement("img");
      imageUrl = imageUrl == null?"none":imageUrl;
      if(imageUrl.indexOf(".jpg") > -1 || imageUrl.indexOf(".png") > -1){
        image.src = imageUrl;
      }else{
        image.src = "images/kitchen_adventurer_lemon.jpg";
      }
      url.appendChild(image);
      item.appendChild(url);
      header = document.createElement("h3");
      header.innerHTML = title;
      item.appendChild(header);
      par = document.createElement("p");
      par.innerHTML = text;

      //add it to the list
      var slider = $('.flexslider').data('flexslider');
      slider.addSlide(item, 1);
    }

    google.setOnLoadCallback(initialize);
