<template>
  <div>
    <section id="top">
      <div class="container transform">
        <div class="row">
          <div class="col">
            <h1 style="font-size: 36px;">名企精英都在用的专业简历,备受好评的求职利器,悠行于职海之中</h1>
            <p style="font-size: 17px;margin-top:60px;margin-bottom: 60px;">百万人才使用的智能简历工具，帮你快速制作一份优秀简历，斩获高薪 Offer</p>
            <div class="form ad-button">
              <button type="button" class="btn btn-success mr-5">免费制作简历</button>
              <button type="button" class="btn btn-outline-success">2020年春招简历模板</button>
            </div>
          </div>
          <div class="col">
            <img src="https://cdn.timecamp.com/en/img/home/new/top-right.png" alt="悠行简历--专业的简历工具" title="悠行简历--专业的简历工具"
              style="max-width: 400px;" />
          </div>
        </div>
      </div>
    </section>
    <div class="cv-template">
      <h3 class="text-center" style='margin: 0;'>
        <a style="color: #404040">选择你的简历模板</a>
      </h3>
      <div class="text-center mt-3">
        选对专业的简历模板，帮你提高
        <span style='color: #ff4f4c;'> 2 倍求职成功率</span>
        <span>
          <a style="margin-left: 20px; color: #909090;">更多简历模板&gt;&gt;</a>
        </span>
      </div>
      <create-resume></create-resume>
    </div>
    <!-- <div class="social-proofs container">
			<p class="trusted-by social-proof-item">受到很多同学的信赖</p>
			<div class="social-proof-item ">
				<img class="logos" src="" alt="TimeCamp partner logo" title="time-tracking-software">
				<img class="logos" src="" alt="TimeCamp partner logo" title="time-tracking-software">
			</div>
			<img class="social-proof-item reviews" src="/en/img/calendly-lp/capterra_reviews.png" alt="Timecamp reviews on capterra"
				title="time tracking software">
		</div> -->
    <div class="card-deck cv-card-characteristic">
      <div class="card shadow-lg bg-white rounded">
        <img class="card-img-top" src="../../static/cvCardImg1.jpg" alt="Card image cap">
        <div class="card-body">
          <span class="badge badge-success">专业</span>
          <h5 class="mt-4">悠行简历由人力资源专家设计并推荐</h5>
          <p class="card-text">简历是为了展示你专业的工作能力，而市面上大量花哨而不适用的模板，不但浪费选择的时间和购买模板的金钱，甚至会给你的简历减分。</p>
        </div>
      </div>
      <div class="card shadow-lg bg-white rounded">
        <img class="card-img-top" src="../../static/cvCardImg2.jpg" alt="Card image cap">
        <div class="card-body">
          <span class="badge badge-success">高效</span>
          <h5 class="mt-4">专业的简历排版,自动排版，一键优化</h5>
          <p class="card-text">不管写多少东西，删改多少次，都不需要在排版上浪费一点时间。刚好一页纸，一键自动优化排版，让你专注于写出自己的优势，确保得到 HR 的注意和肯定。</p>
        </div>
      </div>
      <div class="card shadow-lg bg-white rounded">
        <img class="card-img-top" src="../../static/cvCardImg3.jpg" alt="Card image cap">
        <div class="card-body">
          <span class="badge badge-success">简单</span>
          <h5 class="mt-4">详尽的引导、示例,填空就能写出的好简历</h5>
          <p class="card-text">跟随引导一步一步整理你的经历，每一步都会为你提供专业的建议和例子，彻底告别“废话”和“写不出来”。只需要填空就能写出 HR 真正关心的问题，突出你的能力和优势。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .myMenu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .indexContain {
    width: 100%;
    height: 100%;
    border: 1px solid #ededed;
    background: #fff;
  }
  
  .cardBox {
    position: relative;
    width: 1200px;
    margin: 20px auto 30px auto;
    box-shadow: 0 10px 15px #888;
    border-radius: 6px;
  }
  
  section#top {
    overflow: hidden;
    background: -moz-linear-gradient(left, #fff 0%, #e7e7e7 100%);
    background: -webkit-linear-gradient(left, #fff 0%, #e7e7e7 100%);
    background: linear-gradient(to right, #fff 0%, #e7e7e7 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$start', endColorstr='$end', GradientType=1);
    transform: skewY(-8deg);
    padding: 12rem 0 6rem;
    margin-top: -4rem;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .transform {
    transform: skewY(8deg);
  }
  
  .ad-button {
    margin-top: 70px;
    margin-bottom: 70px;
  }
  
  .social-proofs {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
  }
  
  .social-proofs .social-proof-item {
    margin: 0 8px 16px 0;
    text-align: center;
  }
  
  .cv-template {
    padding-top: 12rem;
  }
  
  .cv-card-characteristic {
    padding-top: 13rem;
    padding-bottom: 13rem;
    margin: auto 8rem;
  }
</style>
<script>
  import createResume from '../components/createResume.vue'
  export default {
    components: {
      createResume
    }
  }
</script>
