    <!-- List of RSS feeds to pull
    http://feeds.feedburner.com/ThePositivityblog-PutSomePersonalDevelopmentAndPositivityIntoYourLif
    -->

    google.load("feeds", "1");

    function initialize() {
      
      // EXAMPLE CODE
      // var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");
      // feed.load(function(result) {
      //   if (!result.error) {
      //     var container = document.getElementById("feed");
      //     for (var i = 0; i < result.feed.entries.length; i++) {
      //       var entry = result.feed.entries[i];
      //       var div = document.createElement("div");ja
      //       div.appendChild(document.createTextNode(entry.title));
      //       container.appendChild(div);
      //     }
      //   }
      // });

      var feed = new google.feeds.Feed("http://mirthandmotivation.com/feed/");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            // div.appendChild(document.createTextNode(entry.title));
            div.innerHTML = entry.content;
            container.appendChild(div);
          }
        }else{
          alert("error with mirth feed");
        }
      });

      var positivityFeed = new google.feeds.Feed("https://www.reddit.com/r/Positive/.rss");
      positivityFeed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.appendChild(document.createTextNode(entry.title));
            // div.innerHTML = entry.content;
            container.appendChild(div);
          }
        }else{
          alert("error with positivity feed");
        }
      });
      
      var redditFeed = new google.feeds.Feed("http://www.reddit.com/r/GetMotivated.rss");
      redditFeed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            addToSlider(entry.title);
            var div = document.createElement("div");

            // div.innerHTML = entry.content;

            if(entry.title.indexOf("[Image]") > -1){
            imageLink = $(entry.content).find("a:contains('[link]')").attr('href');
              // image = $(entry.content).find('img').attr('src');
              console.log(imageLink);
              imageItem = document.createElement("img");
              imageItem.src = imageLink;
              div.appendChild(imageItem);
            }
            div.innerHTML = entry.content;
            link = entry.link;
            container.appendChild(div);
          }
        }else{
          alert("error fetching reddit feed");
        }
      });
    }

    function addToSlider(title){
      //generate the new list item
      var item = document.createElement("li");
      image = document.createElement("img");
      image.src = "images/kitchen_adventurer_lemon.jpg";
      item.appendChild(image);
      header = document.createElement("h3");
      header.innerHTML = title;
      item.appendChild(header);

      //add it to the list
      var container = document.getElementById("slider");
      $("#slider").append(item);
    }

    google.setOnLoadCallback(initialize);
