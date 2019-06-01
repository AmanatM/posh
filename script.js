	/*PARALLAX*/

window.addEventListener('scroll', function(){
	let d = document;
	const scrollPosition = window.pageYOffset;
	const bgParallax = d.getElementsByTagName('header')[0];
	const limit = bgParallax.offsetTop + bgParallax.offsetHeight;  
	const top_menu = d.getElementById('top-menu');
	const header_logo = d.getElementById('header-logo');
	if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit)
		bgParallax.style.backgroundPositionY = (55 - 10*scrollPosition/limit) + '%';   
	else
		bgParallax.style.backgroundPositionY = '55%';    

	if(scrollPosition >= limit) {
		top_menu.classList.add('fixed-menu');
		header_logo.src = 'files/logo-dark.png';
	}
	else {
		top_menu.classList.remove('fixed-menu');
		header_logo.src = 'files/logo.png';
	}
});

	/*TOOGLE*/

const toogle_btn = document.getElementById('toogle-btn');
const menu = document.getElementById('menu');
toogle_btn.addEventListener('click', function() {
	if(menu.classList.contains('active')){
		menu.classList.remove('active');
		this.classList.remove('active');
	}
	else{
		menu.classList.add('active');
		this.classList.add('active');
	}
});


	/*SERVICE SCROLL*/

const services_btns = document.getElementsByClassName('services-item');
const active_content = document.getElementsByClassName('active-content');
for(var i = 0; i < services_btns.length; i++) {
	services_btns[i].addEventListener('click', function() {
		for(var i = 0; i < services_btns.length; i++) {
			services_btns[i].classList.remove('active');
		}	
		this.classList.add('active');
		
		switch(this) {
			case services_btns[0]:
				for(var i = 0; i < active_content.length; i++) {
					active_content[i].style.right = '0%';
				}
				break;
			case services_btns[1]:
				for(var i = 0; i < active_content.length; i++) {
					active_content[i].style.right = '100%';
				}
				break;
			case services_btns[2]:
				for(var i = 0; i < active_content.length; i++) {
					active_content[i].style.right = '200%';
				}
				break;
			case services_btns[3]:
				for(var i = 0; i < active_content.length; i++) {
					active_content[i].style.right = '300%';
				}
				break;	
			case services_btns[4]:
				for(var i = 0; i < active_content.length; i++) {
					active_content[i].style.right = '400%';
				}
				break;			
		}
	});
}

