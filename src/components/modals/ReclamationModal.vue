<template>
<input type="checkbox" id="RCLMModal" class="modal-toggle" />
<div class="modal bg-slate-900/60">
  <div class="modal-box">
    <h3 class="font-black text-slate-600 text-lg">RCLM-2000242</h3>
        <div class="w-full flex flex-col gap-4">
            <div class="w-full grid grid-cols-2 gap-4  py-6">
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium">N° réclamation</span>
                    <span class="font-semibold">RCLM-2553620</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium capitalize">type</span>
                    <span class="font-semibold capitalize">technique</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium capitalize">date</span>
                    <span class="font-semibold">20-12-2036</span>
                </div>
                <div class="flex flex-col gap-1">
                    <span class="text-sm font-medium capitalize">état</span>
                    <span class="w-fit flex items-center gap-2 text-red-400">
                        <span class="w-2 h-2 rounded-full bg-red-400"></span>
                        non-traité
                    </span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <span class="text-sm font-medium capitalize">description</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt quae accusamus dolor vero. Tempora officiis minima explicabo quidem nihil, quis deleniti dignissimos! Accusamus blanditiis vitae quam, voluptatem nesciunt placeat molestiae pariatur nihil, sunt sequi exercitationem natus et eius? Aperiam, voluptatem! Asperiores soluta sunt maxime blanditiis quas in temporibus. Blanditiis!</p>  
            </div>
            
        </div>
    <div class="modal-action">
      <label for="RCLMModal" class="btn btn-ghost hover:bg-slate-100 border border-slate-300 hover:border-primary rounded-xl capitalize hover:text-primary">retour</label>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style>

</style>