/**
 * @author: Saul Neri
 */

function selectedModal(id) {
  this.$ = document.querySelector(id);
  
  this.hide = function() {
	this.$.parentNode.classList.remove('is-active');
  }

  this.show = function() {
	this.$.parentNode.classList.add('is-active');
  }
  
  this.remove = function() {
	this.$.parentNode.remove();
  }

  this.getTheme = function() {
	return document.querySelector(id).getAttribute('data-theme');
  }
};  


//const $modal = new selectedModal('.modal');



