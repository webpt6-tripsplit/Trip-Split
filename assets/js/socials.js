var socials = document.querySelectorAll('.social');

class Social {
    constructor(e) {
        this.element = e;
        this.element.addEventListener('click',  (e) => {
            this.test(e);
        })
    }
        test(e) {
        // console.log(e.srcElement.classList[2])
            if(e.srcElement.classList[3] == 'ashlee') {
                if(e.srcElement.classList[2] == 'fa-linkedin') {
                    window.open('https://www.linkedin.com/in/ashlee-ryan-22b441142/')
                } else {
                    window.open('https://github.com/orgs/webpt6-tripsplit/people/ashryan/')
                }
            } else {
                if(e.srcElement.classList[2] == 'fa-linkedin') {
                    window.open('https://www.linkedin.com/in/daniel-sockness-607371124/')
                } else {
                    window.open('https://github.com/orgs/webpt6-tripsplit/people/daniel-sockness/')
                }
            }
    }
}

socials.forEach(socials => {
    return new Social(socials);
})
