if (Meteor.isClient) {

  Template.snap.rendered = function(){
      snapper = new Snap({
      element: document.getElementById('content'),
      dragger: null,

    });
    snapper.disable();
  }


    Template.snap.events({
    'click #open-left' : function () {
      snapper.open('left');
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
