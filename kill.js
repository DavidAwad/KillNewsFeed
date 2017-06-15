function blockAndDisplay() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    var message = $('#ContentArea');

    // use our tag to check if we've run
    done = $('#distracted').length;

    // if the distracted tag exists, a length of 1 will be returned
    if ( !done ) {
      message.remove();

      message = $('<h1>')
          .attr('id', 'distracted')
          .text("Don't get distracted by Facebook!")
          .css('font-size', '30px')
          .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
          .css('position', 'relative')
          .css('top', '75px');
      $('#contentArea').append(message);

      feed.children().remove();
      $('.ticker_stream').remove();
      $('.ego_column').remove();
      $('#pagelet_games_rhc').remove();
      $('#pagelet_trending_tags_and_topics').remove();
      $('#pagelet_canvas_nav_content').remove();
     }
}

window.setInterval(blockAndDisplay, 100);
