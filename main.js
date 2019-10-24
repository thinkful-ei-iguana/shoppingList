'use strict';

function main(){
  
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    
    let item = $('#shopping-list-entry').val();
    //console.log(item);
    $('#shopping-list-entry').val(' ');
    
    
    $('.shopping-list').prepend(`<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);


    $('.shopping-item-delete').on('click', function(event) {
      $(this).closest('li').remove();
    });

    $('.shopping-item-toggle').on('click', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });



  });

}

$(main);