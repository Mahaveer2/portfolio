export function enhance(form){
  async function handleSubmit(event){
    event.preventDefault();

    const data = new FormData(form);

    const res = await fetch(form.action,{
      method:String(form.method).toUpperCase(),
      body:data
    });

    const json = await res.text();
    console.log(json);
    
  }

  form.addEventListener('submit',handleSubmit);

  return {
    destroy: () => {
      form.removeEventListener('submit',handleSubmit);
    }
  }
}