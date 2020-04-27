class Check {

	constructor() {
		this.audio = new Audio();
		let wrap = document.querySelector('.lessonEng');
		this.index = 0;
		this.checkLetters = [];
		wrap.addEventListener('click', e => this.check(e));

	}



	check(e){

		if(this.index === 2) return;

		let t = e.target;

		if(t.classList.contains('lessonEng__select')) return;

		if(!t.classList.contains('lessonEng__card')) return;

		this.index++;

		t.classList.add('lessonEng__rotate');

		this.checkLetters.push(t);

		t.classList.add('lessonEng__select');



		let select = document.querySelectorAll('.lessonEng__select');

		if(this.checkLetters.length != 2) return;

		if(this.checkLetters[0].getAttribute('data-val') === this.checkLetters[1].getAttribute('data-val')){

			this.checkLetters[0].parentNode.classList.add('lessonEng--correct');
			this.checkLetters[1].parentNode.classList.add('lessonEng--correct');

			setTimeout(()=>{
				this.audio.src = 'img/right.mp3';
				this.audio.play();
			}, 500);
			
			setTimeout(()=>{

				this.checkLetters = [];
				this.index = 0;

			}, 1000);

		} else{

			let rotate = document.querySelectorAll('.lessonEng__rotate');

			setTimeout(()=>{
				this.audio.src = 'img/wrong.mp3';
				this.audio.play();
			}, 500);

			setTimeout(()=>{

				for(let i = 0; i < rotate.length; i++){

					if(!rotate[i].parentNode.classList.contains('lessonEng--correct')){

						rotate[i].classList.remove('lessonEng__rotate');

					}

					
					this.index = 0;

				}

			}, 2000);
			
			setTimeout(()=> {
				
				this.checkLetters[0].style.border = '';
				this.checkLetters[1].style.border = '';
				this.checkLetters = [];
			
			}, 2000);

		}

		select.forEach(s=> {
			s.classList.remove('lessonEng__select');
		});

	}

}

class CreateHtml {

	constructor({renderTo}) {
		this.interactiveData = [1,2,3,4,5,65,6,7,8,8];

		renderTo.appendChild(this.table());

	}

	table(){

		let lessonEng = document.createElement('div');
		lessonEng.classList.add('lessonEng');

		let count = 10;

		for(let i = 0; i < count; i++){

			let cardWrap = document.createElement('div');
			cardWrap.classList.add('lessonEng__cardWrap');

			cardWrap.innerHTML = `				
			<div class="lessonEng__card" data-val="${i}">
			<span class="lessonEng__title">title</span>
		</div>`;

			let cardWrap2 = document.createElement('div');
			cardWrap2.classList.add('lessonEng__cardWrap');
			
			cardWrap2.innerHTML = `<div class="lessonEng__card" data-val="${i}">
			<img class="lessonEng__picture" src="img/${i}.jpg" />
		</div>	`;

			lessonEng.appendChild(cardWrap);
			lessonEng.appendChild(cardWrap2);

		}

		return lessonEng;

	}


}

document.addEventListener('DOMContentLoaded', ()=> {
	this.createHtml = new CreateHtml ({
		renderTo: document.body,
	});

	this.check = new Check();
});