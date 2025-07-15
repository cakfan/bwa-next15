import { db } from "@/db";
import { post } from "@/db/schema";
import { randomUUID } from "crypto";

async function main() {
  console.log("Seeding posts...");
  try {
    await db.insert(post).values([
      {
        id: randomUUID(),
        slug: "train-to-busan",
        title: "Train to Busan",
        content:
          "Seok Woo, his estranged daughter Soo An, and other passengers become trapped on a KTX train (high-speed train) heading from Seoul to Busan during a disastrous virus outbreak in South Korea.",
        poster: "https://i.mydramalist.com/xklBrc.jpg?v=1",
        releaseDate: new Date("2016-07-20"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
        ageRatingId: "510579f4-5bf3-4dfc-b5a2-d9b51b7fd265", // sesuaikan ID jika pakai UUID
      },
      {
        slug: "parasite",
        title: "Parasite",
        content:
          "Kim Gi Woo is a young man who lives with his unemployed, poor family of four in a semi-basement. One day, his friend Min Hyuk tells him that he is leaving to study abroad and that he should replace him as the tutor of a rich family. Ki Taek then meets the Parks, a rich family of four who are the owners of a global IT firm. Yun Gyo, the lady of the Park's house, accepts Gi Woo as a tutor for her daughter, and he uses Yun Gyo’s naiveness as a chance to employ his other family members.",
        poster: "https://i.mydramalist.com/Z17zWc.jpg?v=1",
        releaseDate: new Date("2019-05-30"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "oldboy",
        title: "Oldboy",
        content:
          "Oldboy revolves around Wu Zheng, a pilot with a high-flying job and enviable good looks. He is more than capable of taking responsibility for the lives of countless passengers but outside of work, he is tameless and free-spirited and basically a child at heart. His son named Xiao Han turns up out of the blue followed by teacher Lin Xiao Ou who’s more than eager to help out. Needless to say, their arrival shakes up the life of a jet-setter especially since Pilot and Teacher had met once before when they were abroad, and it wasn’t pretty.",
        poster: "https://i.mydramalist.com/l05rLc.jpg?v=1",
        releaseDate: new Date("2003-11-21"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "burning",
        title: "Burning",
        content:
          "Jong Su, a part-time worker, bumps into Hae Mi while delivering, who used to live in the same neighborhood. Hae Mi asks him to look after her cat while she's on a trip to Africa. When Hae Mi comes back, she introduces Ben, a mysterious guy she met in Africa, to Jong Su. One day, Ben visits Jong Su's with Hae Mi and confesses his own secret hobby.",
        poster: "https://i.mydramalist.com/odyxzc.jpg?v=1",
        releaseDate: new Date("2018-05-17"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "i-saw-the-devil",
        title: "I Saw the Devil",
        content:
          "Kyung Chul is a sadistic serial killer who preys on women and children. Despite the police's efforts, he remains elusive. When his latest victim, Joo Yeon, the daughter of a retired police chief, is found brutally murdered, her fiancé, Soo Hyun, a top-secret agent, vows to hunt down the killer. He is determined to exact bloody vengeance, even if it means becoming a monster himself.",
        poster: "https://i.mydramalist.com/R3jyxc.jpg?v=1",
        releaseDate: new Date("2010-08-12"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "your-name",
        title: "Your Name",
        content: `Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.

One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.

Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.

[Written by MAL Rewrite]`,
        poster: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
        releaseDate: new Date("2016-08-26"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "spirited-away",
        title: "Spirited Away",
        content: `Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way.

Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.

[Written by MAL Rewrite]`,
        poster: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
        releaseDate: new Date("2001-07-20"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "weathering-with-you",
        title: "Weathering With You",
        content: `Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother.

Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo's unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a "sunshine girl"—someone who will clear the sky for people when they need it the most.

Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...

[Written by MAL Rewrite]`,
        poster: "https://cdn.myanimelist.net/images/anime/1880/101146.jpg",
        releaseDate: new Date("2019-07-19"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "imawa-no-kuni-no-alice",
        title: "Imawa no Kuni no Alice",
        content:
          "Arisu Ryohei—a listless, jobless and video-game-obsessed young man—suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive. In this strange world, Arisu meets Usagi, a young woman who’s navigating the games alone. After a dangerous game which tests Arisu’s limits, the two set out together to unravel one mystery after another as they risk their lives and confront what it means to live.",
        poster: "https://i.mydramalist.com/qP5R0_4c.jpg?v=1",
        releaseDate: new Date("2020-12-10"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
      {
        slug: "imawa-no-kuni-no-alice-season-2",
        title: "Imawa no Kuni no Alice Season 2",
        content:
          "Arisu Ryohei and Usagi Yuzuha have been pursuing the mystery of “borderland”, risking their lives in games in order to survive and return to their world. The two of them encounter friends, foes and the mastermind who controls the game at a location believed to be the key to unravelling the mystery. They have collected the numbered cards each time they won a game. All that remains are the jack, queen and king cards. The games they face this round will be of greater difficulty than the ones that came before.",
        poster: "https://i.mydramalist.com/X0qeJ_4c.jpg?v=1",
        releaseDate: new Date("2022-12-22"),
        authorId: "vF43TZaIbfGPt54jYiw9JDLZ7gbKOorP",
      },
    ]);
    console.log("Posts seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding posts:", error);
    process.exit(1);
  }
}

main();
