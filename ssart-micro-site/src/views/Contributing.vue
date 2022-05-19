<template>
  <div class="contributing">
        <main>
            <div class="container px-5 my-5">
                <div class="container-fluid px-5">
                  <br><br>
    <h1 class="bold">Contributing</h1>
    <hr>
    <br>
      <h3 class="bold">How to contribute SSART</h3>
      
      <br>

      <h5>Thank you for your new contribution. Please follow the guidelines before contributing</h5>
      <br>
        <p class="bold"> 1st. Give context. 
        <p>Help others get quickly up to speed. If you’re running into an error, explain what you’re trying to do and how to reproduce it.
        <p>If you’re suggesting a new idea, explain why you think it’d be useful to the project (not just to you!).
          <br>
        <p class="bold"> 2nd. Do your homework beforehand.
        <p>It’s OK not to know things, but show that you tried. 
        <p>Before asking for help, be sure to check a project’s README, documentation ... etc and search the internet for an answer.
        <p>People will appreciate it when you demonstrate that you’re trying to learn.
          <br>
        <p class="bold"> 3rd. Keep requests short and direct.
        <p>Much like sending an email, every contribution, no matter how simple or helpful, requires someone else’s review.
        <p>Many projects have more incoming requests than people available to help. Be concise.
        <p>You will increase the chance that someone will be able to help you.
          <br>
        <p class="bold"> last. Keep all communication public.
        <p>Although it’s tempting, don’t reach out to maintainers privately unless you need to share sensitive information 
        <p>(such as a security issue or serious conduct violation). 
        <p>When you keep the conversation public, more people can learn and benefit from your exchange.
        <p>Discussions can be, in themselves, contributions.
          <br>
    <br>
    <hr>
    <h5 class="bold">Build Test</h5>
    <br>
        <p> You can check if your contribution is distributable through the build test.
          <pre>
      > npm install
      > npm run build <span class="annotation"> // build dist files in ./dist</span>
          </pre>
    <hr>
    <h5 class="bold">Documentation</h5>
    <br>
        <p > Please make sure that the document already exists before creating or modifying it
        <p > Please refer to the previous form and fill it out similarly
        <p > Please write it so that anyone can find out the specific functions and actions
        <br>
    <hr>
    <h5 class="bold">Bug Fix and Issues</h5>
    <br>
        <p> If there is a problem, please share it in detail (There is a problem that I can't Y even though I did X !)
        <p> Rather than fixing it right away, please share or discuss the problem with others
        <p> If you have any additional sharing or questions, please contact the development team via email </p>
  <a href="https://github.com/ssartchart/ssart"><span class="script-color1">OurGit</span></a>
  </div>
            </div>
        </main>
  </div>

</template>

<script>

export default {
  created() {
    window.scrollTo(0, 0)
  }
}


</script>


<style>
pre {
  padding-top: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  word-wrap: break-word;
  font-family: "Fira Mono", Consolas, Menlo, Monaco, "Courier New", Courier, monospace;
  font-variant-ligatures: no-common-ligatures;
  text-rendering: optimizeSpeed;
  color: #000000;
  font-size: 1em;
  text-align: start;
}

.tag {
  color: blue;
}

.script-color1 {
  color: blueviolet;
}
.annotation {
  color: rgb(52, 116, 69);
}

.bold{
  font-weight: bold;
}
</style>