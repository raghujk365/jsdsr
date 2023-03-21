const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();