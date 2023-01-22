<script>
  export let title,description,link,img;
</script>

<div class="card">
  <img src={img} style="width: 100%;height:56%;" alt="">
  <div class="overlay">
    <div class="content">
      <h1 class="title" >{title}</h1>
      <div class="p-p">
        <div style="flex-direction:column;justify-content:center;align-items:center;">
          <p>{description}</p>
          <a href={link} class="btn primary" style="background-color: #fff !important;color:#000 !important;width:80%">View source</a>
        </div>
      </div>
    </div>
  </div>
</div>
