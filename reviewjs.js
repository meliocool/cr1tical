document.addEventListener('DOMContentLoaded', function () {
    var reviewForm = document.getElementById('reviewForm');
    var commentSection = document.getElementById('commentSection');
   
    document.querySelector('.review-submit').addEventListener('click', function () {

    var reviewText = document.getElementById('commentsec').value;
   
    var ratingInput = document.getElementById('ratingInput').value;

    if (parseInt(ratingInput) > 10) {
        alert("Rating cannot be above 10. Please enter a valid rating u illiterate dumbass.");
        return; 
    }
   
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');
   
    var nameDiv = document.createElement('div');
    nameDiv.classList.add('comment-name');
    nameDiv.textContent = 'BrandonTheBarber';
   
    var reviewDiv = document.createElement('div');
    reviewDiv.textContent = reviewText;
   
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('image-container');
   
    var imgElement = document.createElement('img');
    imgElement.src = 'rating/' + ratingInput + '.png';
   
    imgDiv.appendChild(imgElement);
   
    var textDiv = document.createElement('div');
    textDiv.classList.add('text-container');
   
    textDiv.appendChild(nameDiv);
    textDiv.appendChild(reviewDiv);
    commentElement.appendChild(textDiv);
    commentElement.appendChild(imgDiv);
   
    commentSection.appendChild(commentElement);
   
    document.getElementById('commentsec').value = '';
    document.getElementById('ratingInput').value = '';
    });
   });