angular.module('app', [])
  .controller('controller', ['$scope', function($scope) {
    


      $scope.collections = [


              {
          title: 'Self-written',
          url: '',
          items: [
            {
              title: 'PPT',
              desctiption: '',
              url: './posts/PowerPoint/PowerPoint.html',
              id: 'burn'
            },

            {
              title: 'Burn down the business schools',
              desctiption: '',
              url: './posts/burn/burn.html',
              id: 'burn'
            }
          ]
        },


        {
          title: 'Top 5 pieces on Growth Hacking',
          url: '',
          items: [
            {
              title: 'Dropbox Startup Lessons Learned',
              desctiption: '',
              url: 'http://growthhackers.com/slides/lean-startup-lessons-that-helped-dropbox-become-a-10b-company/',
              id: 'dropbox-startup-lessons-learned'
            },
            {
              title: 'How SpringSled got 150,000 users in 4 weeks',
              desctiption: '',
              url: 'http://prefundia.com/blog/506/',
              id: 'how-springsled-got-150000-users-in-4-weeks'
            },
            {
              title: 'Growth Hacker is the new VP of Marketing',
              desctiption: '',
              url: 'http://andrewchen.co/2012/04/27/how-to-be-a-growth-hacker-an-airbnbcraigslist-case-study/',
              id: 'growth-hacker-vp-marketing'
            },
            {
              title: 'How to gather 100,000 emails in one week',
              desctiption: '',
              url: 'http://fourhourworkweek.com/2014/07/21/harrys-prelaunchr-email/',
              id: 'how-to-gather-100000-emails-in-one-week'
            },
            {
              title: 'Growth Hacking',
              desctiption: '',
              url: 'http://growthhackers.com/slides/growth-hacking-or-lean-marketing-for-startups-by-mattan-griffel/',
              id: 'growth-hacking'
            }
          ]
        },


        {
          title: 'Gaining blog subscribers',
          url: '',
          items: [
            {
              title: 'How We Got 1,000+ Subscribers from a Single Blog Post in 24 Hours',
              desctiption: '',
              url: 'http://www.groovehq.com/blog/1000-subscribers',
              id: 'how-we-got-1000-subscribers-from-a-single-blog-post-in-24-hours'
            },
            {
              title: 'The Real Secret to 1,000 Blog Subscribers in 60 Days or Less',
              desctiption: '',
              url: 'http://www.quicksprout.com/2012/04/16/the-real-secret-to-1000-blog-subscribers-in-60-days-or-less/',
              id: 'the-real-secret-to-1000-blog-subscribers'
            }
          ]
        },


        {
          title: 'Growth conference',
          url: '',
          items: [
            {
              title: 'HustleCon 2014: I Went, I Spoke, But Sam Made $40K From It',
              desctiption: '',
              url: 'http://www.nevblog.com/hustlecon-2014/',
              id: 'hustlecon-2014'
            },
            {
              title: 'Growth Hacker Conference',
              desctiption: '',
              url: 'http://growthhackersconference.com/',
              id: 'growth-hacker-conference'
            },
            {
              title: 'Growth Hacking Conference',
              desctiption: '',
              url: 'http://www.growthhackingconference.com/',
              id: 'growth-hacking-conference'
            },
            {
              title: 'Adobe Summit | The Digital Marketing Conference',
              desctiption: '',
              url: 'http://events.mashable.com/event/3504006352',
              id: 'adobe-summit'
            }
          ]
        },


        {
          title: 'Good words',
          url: '',
          items: [
            {
              title: 'Exigent',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/exigent?s=t',
              id: 'exigent'
            },
            {
              title: 'Amorphous',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/amorphous?s=t',
              id: 'amorphous'
            },
            {
              title: 'Casuistry',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/casuistry?s=t',
              id: 'casuistry'
            },
            {
              title: 'Specious',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/specious',
              id: 'specious'
            },
            {
              title: 'Sophistry',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/sophistry',
              id: 'sophistry'
            },
            {
              title: 'Fallacious',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/fallacious',
              id: 'fallacious'
            },
            {
              title: 'Sartorial',
              desctiption: '',
              url: 'http://dictionary.reference.com/browse/sartorial?s=t',
              id: 'sartorial'
            }
          ]
        },
      ];



// CHANGE URL ON MODAL OPEN / CLOSE //////////////////////////////////////////////////////////////

var PAGE_TITLE = "Pelican News";


// CLEAN APPENDED STUFF (?ref=facebook, etc.) OFF BASE URL
      var getBaseUrl = function() {
        return window.location.href.split('?')[0];
      }

// CLEAR ID FROM URL
      var clearUrl = function() {
        var url = getBaseUrl();
        window.history.pushState({}, PAGE_TITLE, url);
      }

// ADD ID TO URL
      var appendToUrl = function (append) {
        var url = getBaseUrl() + "?id=" + append;
        window.history.pushState({}, PAGE_TITLE, url);
      }

// OPEN IFRAME
      $scope.iframeurl = function(id, url){
        $('#iframe').attr('src', url);
        appendToUrl(id);
      };

// CLOSE IFRAME
      $('#myModal').on('hidden.bs.modal', function () {
        clearUrl();
      })

// GET ANY PARAMETER YOU WANT FROM THE URL
      function getParameterByName(name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }

// GET ID FROM THE URL
      var id = getParameterByName('id');

      console.log(id)

///////////////////////////////////////////////////////////////////////////////////////////////////////


//Programatically opening the modal (simulating the click);
var openModal = function (id, url) {
    $scope.iframeurl(id, url);
    $('#myModal').modal('show');
};

var searchForItemById = function (id) {
    //look at each one until you find it.
    
    //go over each collection
    for (var i = 0; i < $scope.collections.length; i++) {
        //get the collection
        var collection = $scope.collections[i];
        //get the items out of the collection
        var items = collection.items;
        
        //go over each item
        for (var x = 0; x < items.length; x++) {
            //get the item
            var item = items[x];
            
            if (item.id == id) {
                return item;
            } else {
                //keep going and look at the next one
            }
        }
    }
    
    //if you make it to the end return null AKA not found
    return null;
};

var id = getParameterByName('id');

if (id !== '') {
    //search for the correct article to show.
    
    var item = searchForItemById(id);
    
    if (item !== null) {
        openModal(item.id, item.url);
    }
}



  }]);