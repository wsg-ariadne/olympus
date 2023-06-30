<script setup>
const openLink = (link) => {
  window.open(link, '_blank')
}
</script>

<template>
  <div>
    <!-- Container -->
    <LandingContainer parent-classes="z-20 absolute top-0 left-0">
      <!-- Navigation -->
      <nav class="py-6 flex flex-row justify-between items-center">
        <!-- Logo and links -->
        <div class="flex flex-row justify-start items-center gap-8">
          <!-- Logo -->
          <img src="@/assets/ariadne-logotype.svg"
            alt="ariadne"
            class="h-4">
          <!-- Links -->
          <ul class="list-none flex flex-wrap items-center justify-center gap-6">
            <li class="hover:underline"><a href="/reports">Reports</a></li>
            <li class="hover:underline"><a href="#">White Paper</a></li>
            <li class="hover:underline"><a href="#team">Team</a></li>
            <li class="hover:underline"><a href="https://wsg-ariadne.github.io/privacy">Privacy</a></li>
          </ul>
        </div>

        <!-- Install button -->
        <a href="#solution"
          class="bg-adn-purple text-white hover:rounded-sm
          font-bold py-2 px-4 rounded-lg transition-all cursor-pointer">
          Get Ariadne
        </a>
      </nav>
    </LandingContainer>

    <LandingContainer parent-classes="lg:h-[calc(100vh-2rem)] relative
      h-[60vh]">
      <!-- Background image -->
      <img src="@/assets/landing.svg"
        alt="landing"
        class="h-screen absolute top-0 hidden lg:block
          right-[4rem] xl:right-[15rem]">
      
      <!-- CTA -->
      <LandingButton parent-classes="border-adn-purple text-adn-purple"
        @click="openLink('https://sites.google.com/up.edu.ph/wsg-ariadne/alpha-testing')">
        <div class="flex flex-row items-center gap-4">
          <!-- Icon -->
          <img src="@/assets/ariadne-logomark-purple.svg"
            alt="Ariadne logomark"
            class="h-6">
          
          <!-- Text -->
          <div>
            <h3 class="font-bold">Alpha testing ongoing</h3>
            <span>Get started</span>
          </div>
        </div>
      </LandingButton>

      <!-- Landing text -->
      <h1 class="mt-4 leading-snug xl:text-7xl xl:leading-snug">
        Helping you find<br>
        your way around<br>
        the Web
      </h1>
    </LandingContainer>

    <!-- Problem -->
    <LandingContainer parent-classes="bg-adn-purple text-white relative">
      <div class="grid lg:grid-cols-2 grid-rows-none gap-4">
        <!-- Text -->
        <div class="py-10">
          <h2 class="mb-4">The problem</h2>
          <p class="max-w-lg w-full">
            <strong>Cookie banners</strong> are notices displayed to ask or inform a user of the use of cookies, which are pieces of data used to identify your device as you browse the internet.
          </p>
          <p class="max-w-lg w-full">
            Sometimes, cookie banners use what's called <strong>deceptive patterns,</strong> which are tricks to <strong>make you do things that you didn't mean to,</strong> like buying, signing up for, or consenting to something.
          </p>
          <p class="max-w-lg w-full">
            For example, cookie banners might use <strong>unclear language,</strong> where the text on the banner is intentionally vague, or <strong>uneven options,</strong> where the option to accept cookies is more colorful or visually emphasized than the option to decline them.
          </p>

          <!-- CTA -->
          <LandingButton parent-classes="mt-4"
            @click="openLink('https://deceptive.design')">
            <strong>Read about deceptive design</strong>
          </LandingButton>
        </div>

        <!-- Image -->
        <div class="hidden lg:block relative overflow-y-hidden lg:pt-10">
          <img src="@/assets/sample-banner.svg"
            alt="Sample cookie banner"
            class="absolute right-0 w-[24rem] lg:w-[32rem]">
        </div>
      </div>
    </LandingContainer>

    <!-- Solution -->
    <LandingContainer parent-classes="bg-adn-text text-white relative"
      id="solution">
      <div class="grid lg:grid-cols-2 grid-rows-none gap-4">
        <!-- Image -->
        <div class="hidden lg:block relative overflow-y-hidden lg:pt-10">
          <img src="@/assets/sample-screen.svg"
            alt="Sample cookie banner"
            class="absolute left-0 w-[25rem]">
        </div>

        <!-- Text -->
        <div class="py-10">
          <h2 class="mb-4">Our solution</h2>
          <p class="max-w-lg w-full">
            <strong>Ariadne helps you become aware of deceptive design in cookie banners.</strong> It does this through a pair of machine learning models that detect deceptive design patterns within the language and the design of cookie banners.
          </p>
          <p class="max-w-lg w-full">
            Ariadne is part of an <strong>ongoing research project</strong> on the automated detection of deceptive design in cookie banners.
          </p>

          <!-- CTA -->
          <LandingButton parent-classes="mt-4"
            @click="openLink('https://github.com/wsg-ariadne/ariadne/blob/main/README.md#installation')">
            <strong>Install Ariadne</strong>
          </LandingButton>
        </div>
      </div>
    </LandingContainer>

    <!-- Architecture -->
    <LandingContainer parent-classes="bg-adn-white text-adn-text lg:text-center">
      <div class="py-10">
        <div class="max-w-md w-full lg:mx-auto">
          <h2 class="mb-4">How it works</h2>
          <p>
            Ariadne is powered by two <strong>machine learning models</strong> named
            <strong>Calliope</strong> and <strong>Janus,</strong> which helps it see and read
            cookie banners like a human would.
          </p>
          <p>
            Cookie banners on the pages you visit are sent to Calliope
            and Janus for detection, and the results are displayed in 
            Ariadne's interface and badge for you to see.
          </p>
        </div>

        <img src="@/assets/architecture.svg"
          alt="A diagram showing the architecture of the Ariadne project. It depicts two parts, a client containing the browser extension, and a server exposing two machine learning models via an API."
          class="max-w-6xl w-full lg:mx-auto my-8">
        
        <p class="max-w-md w-full lg:mx-auto">
          Cookie banner data is <strong>immediately deleted from the server</strong> after
          detection. We don't store any of your data unless you explicitly
          include it in a feedback report submission.
        </p>

        <!-- CTA -->
        <div class="flex flex-row lg:justify-center items-center
          gap-4 mt-6">
          <LandingButton parent-classes="border-adn-text">
            <strong>Read our paper</strong>
          </LandingButton>
          <LandingButton parent-classes="border-adn-text"
            @click="openLink('https://wsg-ariadne.github.io/privacy')">
            <strong>View our privacy policy</strong>
          </LandingButton>
        </div>
      </div>
    </LandingContainer>

    <!-- Team -->
    <LandingContainer parent-classes="bg-adn-blue text-white" id="team">
      <div class="grid lg:grid-cols-2 grid-rows-none gap-4">
        <!-- Text -->
        <div class="py-10">
          <h2>The team</h2>
          <p class="max-w-lg w-full my-4">
            Ariadne's developers are <strong>Juris Adorna</strong> (left) and <strong>Jared Dantis</strong> (right). We are computer science undergraduate students from the University of the Philippines - Diliman, and our project is advised by Sir Rommel Feria under the <strong>Web Science Group (WSG)</strong> for CS 199 AY 2022-2023.
          </p>

          <!-- CTA -->
          <LandingButton @click="openLink('mailto:ariadne@dantis.me')">
            <strong>Contact us</strong>
          </LandingButton>
        </div>

        <!-- Image -->
        <div class="hidden lg:block relative overflow-y-hidden">
          <img src="@/assets/team.jpg"
            alt="Two people smiling and posing for the camera."
            class="absolute right-0 h-full">
        </div>
      </div>
    </LandingContainer>

    <!-- Footer -->
    <LandingContainer>
      <div class="py-10 grid lg:grid-cols-4 grid-rows-none gap-4">
        <div class="col-span-2">
          <img src="@/assets/ariadne.svg"
            alt="Ariadne"
            class="h-7">
          
          <p class="my-4">
            An ongoing research project from the University of the Philippines Diliman
          </p>

          <div class="flex flex-row gap-2">
            <img src="@/assets/up-seal.png"
              alt="University of the Philippines"
              class="h-16">
            <img src="@/assets/wsg.png"
              alt="Web Science Group"
              class="h-16">
          </div>
        </div>

        <div>
          <h3 class="font-bold text-xl mb-2">Project</h3>
          <ul class="list-none underline">
            <li><a href="https://sites.google.com/up.edu.ph/wsg-ariadne">Alpha testing portal</a></li>
            <li><a href="https://go.dantis.me/ariadne-cws">Chrome Web Store listing</a></li>
            <li><a href="https://github.com/wsg-ariadne">GitHub organization</a></li>
            <li><a href="https://wsg-ariadne.github.io/privacy">Privacy policy</a></li>
            <li><a href="#">White paper</a></li>
          </ul> 
        </div>

        <div>
          <h3 class="font-bold text-xl mb-2">Team</h3>
          
          <p class="mb-0">Juris Adorna &amp; Jared Dantis</p>
          <a href='&#109;&#97;&#105;lto&#58;ar%69a&#100;ne&#64;dan&#116;%69%73&#46;%&#54;De'
            class="underline">
            a&#114;&#105;adne&#64;d&#97;ntis&#46;m&#101;
          </a>
          
          <p class="mb-0 mt-4">Website design by Jared Dantis</p>
          <a href="https://dantis.me"
            class="underline">
            dantis.me/
          </a>
        </div>
      </div>
    </LandingContainer>
  </div>
</template>
