import { Component } from "@angular/core";

enum TextType {
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "p",
  "li",
}

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  inputs: ["paragraphs"],
})
export class MenuComponent {
  public isLoading = true;
  public paragraphs: {
    text?: any;
    type: TextType;
  }[];
  public hideAnimation: boolean;
  panelOpenState = false;


  animation: boolean;
  menu: boolean;
  headerOne: boolean;
  headerTwo: boolean;

  accordions: {
    title: string;
    body: string;
  }[] = [{
    title: 'About Me',
    body: ' Hello, I’m James, the sleep coach. For almost 15 years I had a\n' +
        '        sleeping disorder that I thought I would live with it for the rest\n' +
        '        of my life.Along with the majority of the population I was never taught\n' +
        '        how important sleep is for our wellbeing, and about the science\n' +
        '        &amp; impact on your mind and body, should you get too little. I\n' +
        '        wasn’t given the tools and sleep education needed to ensure I\n' +
        '        gave myself the best possible chance of getting regular deep\n' +
        '        sleep. Our modern has played havoc with our bodies natural ability\n' +
        '        to sleep and we have fallen into some extremely bad habits.\n' +
        '        - I work in London and have a fairly stressful job in an industry\n' +
        '        where I could work 24/7 if I chose to! In my younger years,\n' +
        '        when trying to build a successful career I certainly pushed the\n' +
        '        limit of the hours I stayed awake and sleep was simply seen as\n' +
        '        an unproductive period of time where I could have been\n' +
        '        working. As I hit my 30’s, I started to feel some impact of the stress I\n' +
        '        was putting on my body and mind. I made some effort to\n' +
        '        improve the situation, increasing my exercise and learning\n' +
        '        about meditation. But one or two changes are simply not\n' +
        '        enough. As I hit my mid 30’s, I found myself exhausted, sitting\n' +
        '        in front of my laptop with brain fog, unable to function, with\n' +
        '        my eyes and brain in pain. This was not productive and would\n' +
        '        not enable me to continue to build my carrier, and something\n' +
        '        drastic had to change! I finally decided to take control and make some fairly simple\n' +
        '        changes to my life, and my sleep routine, identifying bad\n' +
        '        habits and creating a new routine that would have a positive\n' +
        '        impact on my sleep and ultimately on my life. I experimented with lots of different aspects of my routine and studied any information on-line that I could get my hands\n' +
        '        on, about the science behind what negatively impacts, or\n' +
        '        positively helps with sleep.'
  },
    {
      title: 'How the program works',
      body: 'I combined everything I had learnt and created a sleep\n' +
          '        routine, which I religiously stuck to. I continued on with\n' +
          '        exactly the same routine each day for many months. Over time\n' +
          '        the new sleep routine I put in place turned in to positive lasting\n' +
          '        habits, and I now sleep almost perfectly each and every day.\n' +
          '        This was an amazing transformation and has had a significantly\n' +
          '        positively impact on my life. My mission now is to help others to understand the basics of\n' +
          '        good sleep hygiene and find the balance between modern\n' +
          '        living and ensuring we create an environment that enables our\n' +
          '        minds to switch off and prepare for sleep. The scientific studies backing up the importance of sleep on the human mind and body is significant and mounting. From\n' +
          '        memory and concentration to peak athletic performance,\n' +
          '        reduced risk of injury, to our general mood, motivation and\n' +
          '        ability to fight off disease. Without sleep the human mind fails to be able to carry out\n' +
          '        even a simple task and with reduced sleep, even just a few\n' +
          '        hours below the recommended 8 hours, we show signs of\n' +
          '        someone who has been drinking alcohol and has impaired\n' +
          '        judgment. Looking back, if I had been taught the importance of sleep\n' +
          '        when I was at school I don’t think I would have had a sleep\n' +
          '        disorder at all and I do wonder what more I could have\n' +
          '        achieved or how the quality of my life may have been positively\n' +
          '        improved. I’m passionate about promoting the benefits of sleep to the\n' +
          '        younger generation. Beliefs such as thinking that drinking lots\n' +
          '        of coffee to stay up all night in order to cram and revise before\n' +
          '        an exam, will lead to a higher chance of you passing are wrong.\n' +
          '        The science behind retaining information is linked heavily with\n' +
          '        the amount of sleep you get. The expectation of you being able\n' +
          '        to retain what you have learnt with reduced sleep is simply\n' +
          '        misguided. This practice doesn’t benefit your studies yet it has\n' +
          '        been going on for many years due to the lack of education\n' +
          '        around sleep. Frankly we are failing our children with not giving\n' +
          '        them the tools and knowledge they need. On a very positive note, it is great to see some of the top\n' +
          '        performing athletes taking sleep as seriously as their training\n' +
          '        and nutrition. I have heard some athletes refer to sleep as their\n' +
          '        natural performance enhancer. Something that will give them\n' +
          '        the edge over their competitors, and they are absolutely\n' +
          '        correct. I enjoy working with athletes, helping them realise\n' +
          '        their full potential. The sleep programme I have created worked for me and while\n' +
          '        you may need to adjust my recommendations slightly for your\n' +
          '        particular lifestyle, I am confident it will have an extremely\n' +
          '        positive impact on your ability to get good quality deep sleep. You may have long term sleeping issues, or simply are having a\n' +
          '        bad week and need some assistance. Whatever your\n' +
          '        circumstance I can help. The programme contains – Simple information about the many factors that impact sleep. There is a suggested daily routine,\n' +
          '        some videos that will help with getting the most from the\n' +
          '        programme and the information provided. It’s not particularly\n' +
          '        long or complicated and should be relatively easy to put into\n' +
          '        action. For so many years I simply accepted that sleep wasn’t for me\n' +
          '        and I felt as if I would always have trouble getting to sleep,\n' +
          '        staying asleep and getting regular good quality deep sleep.\n' +
          '        But I can assure you that this belief was completely wrong.\n' +
          '        I like every other human was not born with sleep issues, I\n' +
          '        formed bad habits and I let my environment take over my\n' +
          '        minds natural ability to sleep. Don’t accept that you simply are\n' +
          '        not a good sleeper and let me help you to better understand\n' +
          '        the factors that impact sleep. With small changes you can make\n' +
          '        a huge impact on your life. I wish you all the best on your journey to getting the sleep you\n' +
          '        deserve. If you fully commit to the programme, I am confident\n' +
          '        you will see some very positive results. So, are you ready to get started?'
    }];

  constructor() {
    this.hideAnimation = !!sessionStorage.getItem('hideIntro');
    console.log('session storage');
  }

  close() {
    sessionStorage.setItem('hideIntro', 'true');
    this.hideAnimation = true;
    // this.modalClose.emit();
    console.log('HIDE INTRO');
  }

  openAccordion() {
    if (!this.headerOne) {
     this.headerOne = true;
    }
  }
}
