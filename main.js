function coloring(){
    $('.color').on('click', function() {
      var pickColor = $(this).attr('class');

      if (pickColor === 'color green nocolor'){
          colorClass = 'green';
      } else if 
          (pickColor === 'color blue nocolor'){
        colorClass = 'blue';
      } else if 
        (pickColor === 'color yellow nocolor'){
            colorClass = 'yellow';
      }  else if  (pickColor === 'color white nocolor'){
        colorClass = 'white';
      } else if  (pickColor === 'color erase nocolor'){
        colorClass = 'erase';
      }
      
  
      $(this).removeClass('nocolor');
      $(this).siblings().addClass('nocolor');
  });
  }


  $('.column').on('mouseover', function() {
      $(this).removeClass('blue');
      $(this).removeClass('yellow');
      $(this).removeClass('green');
      $(this).removeClass('erase');
      $(this).removeClass('white');
      $(this).addClass(colorClass);
  });
  
  function resolution(){
    $('.more').on('click', function() {
        $('.hidden').toggleClass('hidden2');
        $('.row').toggleClass('row2');
    });
};
  $(document).ready(coloring);
  $(document).ready(resolution);