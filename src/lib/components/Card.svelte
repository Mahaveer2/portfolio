<script>
  export let title,description,link,img;
</script>

<div class="card">
  <img src={img} style="width: 100%;height:56%;" alt="">
  <div class="overlay">
    <div class="content">
      <h1 class="title" >{title}</h1>
      <div class="p-p">
        <p>{description}<a href={link} class="btn primary">view demo</a></p>
      </div>
    </div>
  </div>
</div>