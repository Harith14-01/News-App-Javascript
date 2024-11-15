const API_KEY ="45e030d7c4044fb1b5d9d4980f07d455";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    // const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    // const data = await res.json();
    const data = {
        "status": "ok",
        "totalResults": 30513,
        "articles": [
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Matt Burgess, Lily Hay Newman",
                "title": "These Guys Hacked AirPods to Give Their Grandmas Hearing Aids",
                "description": "Three technologists in India used a homemade Faraday cage and a microwave oven to get around Apple’s location blocks.",
                "url": "https://www.wired.com/story/apple-airpods-hearing-aid-hack/",
                "urlToImage": "https://media.wired.com/photos/6734befbaa3b60c51ba80929/191:100/w_1280,c_limit/airpod-hearindaid-sec-2170417864.jpg",
                "publishedAt": "2024-11-13T19:07:15Z",
                "content": "The group members, who have a mix of hardware and software skills and first detailed their hack as part of a technology collective called Lagrange Point, say a couple of dozen people have contacted t… [+2131 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "India and China agree to de-escalate border tensions",
                "description": "The two countries have reached a patrolling agreement after several clashes between their troops since 2020.",
                "url": "https://www.bbc.com/news/articles/ckg0gwy0nlyo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f629/live/0c4624b0-8f94-11ef-9750-53a86a1c5c17.jpg",
                "publishedAt": "2024-10-21T11:06:40Z",
                "content": "India and China have agreed on patrolling arrangements to de-escalate tensions along their disputed Himalayan border, Indias top diplomat has said.\r\nVikram Misri said on Monday that the two sides hav… [+2248 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Is this tiny Mauritian island a confidential spy station?",
                "description": "India has built a 3km-long runway on Agalega and no-one has fully explained why, angering residents.",
                "url": "https://www.bbc.com/news/articles/cvg47274y4no",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9681/live/d1016790-9b94-11ef-b820-9d6a9f778374.jpg",
                "publishedAt": "2024-11-09T01:10:41Z",
                "content": "Arnaud Poulay never wanted to leave the tiny Indian Ocean island of Agalega, but this year he packed his bag and took off, broken-hearted by what he regards as the militarisation of his home.\r\nUntil … [+7315 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Jets intercept plane after 'bomb threat' made",
                "description": "Residents say they heard a loud sonic boom as Typhoon jets scrambled.",
                "url": "https://www.bbc.com/news/articles/czxdzq0d9vyo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6177/live/49ec2740-8c8f-11ef-ab1d-79f5630c944f.jpg",
                "publishedAt": "2024-10-17T17:00:21Z",
                "content": "Typhoon jets from RAF Coningsby in Lincolnshire sped to the Air India flight after a bomb was reported on board\r\nRoyal Air Force fighters were scrambled to intercept a civilian airliner that had repo… [+3218 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-10-22T17:00:11Z",
                "content": "[Removed]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": "Stephan Shemilt",
                "title": "'Hybrid' Champions Trophy not acceptable - PCB",
                "description": "A 'hybrid model' for hosting the Champions Trophy will not be accepted by Pakistan, according to its Cricket Board chairman Mohsin Naqvi.",
                "url": "https://www.bbc.com/sport/cricket/articles/c5ym2v41r04o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/29f1/live/befcd870-9df3-11ef-8014-35a78d259b7b.jpg",
                "publishedAt": "2024-11-08T17:26:36Z",
                "content": "A \"hybrid model\" for hosting the Champions Trophy will not be accepted by Pakistan, according to its Cricket Board chairman Mohsin Naqvi.\r\nPakistan is due to stage a first global tournament since 199… [+1174 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "India Plans Laptop Import Curbs To Boost Local Manufacturing",
                "description": "India is expected to limit imports of laptops, tablets and personal computers after January, Reuters reported Friday citing government sources, a move to push companies such as Apple to increase domestic manufacturing. From the report: This plan, if implement…",
                "url": "https://tech.slashdot.org/story/24/10/18/143228/india-plans-laptop-import-curbs-to-boost-local-manufacturing",
                "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
                "publishedAt": "2024-10-18T14:03:00Z",
                "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "India Agrees With Musk in Satellite Spectrum Allocation Row",
                "description": "India announced on Tuesday it would allocate spectrum for satellite services through administrative means rather than auction, a decision that aligns with recent comments by Elon Musk and rebuffs lobbying efforts by the country's largest telecom operators. Fr…",
                "url": "https://tech.slashdot.org/story/24/10/15/1435205/india-agrees-with-musk-in-satellite-spectrum-allocation-row",
                "urlToImage": "https://a.fsdn.com/sd/topics/communications_64.png",
                "publishedAt": "2024-10-15T14:40:00Z",
                "content": "Jyotiraditya Scindia, India's Communications Minister, stated on Tuesday evening: \"Spectrum for satcomm is shared spectrum, and cannot be auctioned. The administrative allocation of satellite spectru… [+437 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "Canada Predicts Hacking From India as Diplomatic Feud Escalates",
                "description": "Canada is bracing for Indian government-backed hacking as the two nations' diplomatic relationship nosedives to its lowest ebb in a generation. From a report: \"We judge that official bilateral relations between Canada and India will very likely drive Indian s…",
                "url": "https://news.slashdot.org/story/24/10/30/1555247/canada-predicts-hacking-from-india-as-diplomatic-feud-escalates",
                "urlToImage": "https://a.fsdn.com/sd/topics/canada_64.png",
                "publishedAt": "2024-10-30T16:05:00Z",
                "content": "\"We judge that official bilateral relations between Canada and India will very likely drive Indian state-sponsored cyber threat activity against Canada,\" the Canadian Centre for Cyber Security said i… [+591 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "techkritiko@gmail.com (Jay Bonggolto)",
                "title": "The OnePlus 12 is now getting the stable Android 15 update",
                "description": "The OxygenOS 15 update is now hitting OnePlus 12 devices worldwide, with releases in North America, India, and Europe.",
                "url": "https://www.androidcentral.com/phones/the-oneplus-12-is-now-getting-the-stable-android-15-update",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/5YihoisE3ixZ3LsaxmhxfG-1200-80.jpg",
                "publishedAt": "2024-11-07T09:18:22Z",
                "content": "What you need to know\r\n<ul><li>OnePlus fast-tracked the stable Android 15 release for the OnePlus 12, skipping the beta phase in some areas like North America.</li><li>OxygenOS 15 brings AI-powered f… [+2444 chars]"
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Justine Calma",
                "title": "Amazon says it ditched plastic air pillows",
                "description": "Amazon says it has gotten rid of plastic air pillows at warehouses around the world.",
                "url": "https://www.theverge.com/2024/10/21/24276049/amazon-plastic-air-pillows-packaging",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/qwYo7XAE3Loy8QPMmJjRKrCLWAY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935561/acastro_STK103__04.jpg",
                "publishedAt": "2024-10-21T20:01:28Z",
                "content": "Amazon says it ditched plastic air pillows\r\nAmazon says it ditched plastic air pillows\r\n / The company says it got rid of air-filled plastic at its fulfillment centers.\r\nAmazon says that it has gotte… [+1745 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Kate Knibbs",
                "title": "The Guy Behind the Fake AI Halloween Parade Listing Says You’ve Got It All Wrong",
                "description": "An SEO agency owner says he is “very depressed” after one of his AI-assisted Halloween parade listings misled revelers in Dublin, Ireland.",
                "url": "https://www.wired.com/story/ai-halloween-parade-listing-dublin-interview/",
                "urlToImage": "https://media.wired.com/photos/67254e2fddff014d57500bb2/191:100/w_1280,c_limit/Business_hoax_reuters.jpg",
                "publishedAt": "2024-11-01T22:00:26Z",
                "content": "I appreciate that.\r\nWe own this mistake.\r\nSo your name is Nazir Ali, but when you say we\r\nWe are not going to give you any personal information that might be harmful for us. Everyone is writing about… [+2183 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
                "title": "Samsung expands its Galaxy Ring availability to the Indian market",
                "description": "Galaxy Ring comes in nine sizes, and Samsung India offers a 25W charging adapter for free to users who purchase the smart ring until October 18.",
                "url": "https://www.androidcentral.com/wearables/galaxy-ring-is-now-available-in-india",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/KMbUhCn4bUehTLkmfqKTya-1200-80.jpg",
                "publishedAt": "2024-10-17T14:03:45Z",
                "content": "What you need to know\r\n<ul><li>Samsung launched the Galaxy Ring for the masses across regions in July this year, including the U.S.</li><li>The company is now expanding the smart ring's availability … [+2317 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "Samsung launched the Galaxy Ring in India — but it shouldn't have bothered",
                "description": "Samsung (once again) puts itself out of contention in India — this time with the Galaxy Ring. The smart ring costs more than its rivals, and doesn't quite measure up.",
                "url": "https://www.androidcentral.com/wearables/samsung-launched-the-galaxy-ring-in-india-but-it-shouldnt-have-bothered",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/VatnJ6pY3P8DFtkU2FBDbi-1200-80.jpg",
                "publishedAt": "2024-10-21T10:10:41Z",
                "content": "Nearly four months after launching the Galaxy Ring, Samsung decided to bring the wearable to India. The Galaxy Ring is now on sale in the country, and it costs ₹38,999 ($465), $65 more than what it r… [+3264 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "author": "Joe Rossignol",
                "title": "iPhone 17 Being Developed in India: What to Expect From Base Model",
                "description": "Apple's manufacturing partner Foxconn is conducting early development of the base iPhone 17 at a factory in Bengaluru, India, according to The Information's Wayne Ma. This is considered to be a \"milestone\" for Apple's manufacturing efforts in India.\n\n\n\n\n\nThe …",
                "url": "https://www.macrumors.com/2024/10/29/iphone-17-base-model-development-india-report/",
                "urlToImage": "https://images.macrumors.com/t/3zzm7VcAA2sRjc5kWZgZmdLwbEI=/2000x/article-new/2024/09/iphone-16-teal.jpg",
                "publishedAt": "2024-10-29T14:00:05Z",
                "content": "Apple's manufacturing partner Foxconn is conducting early development of the base iPhone 17 at a factory in Bengaluru, India, according to The Information's Wayne Ma. This is considered to be a \"mile… [+1441 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Reuters",
                "title": "China urges India to handle Taiwan issue cautiously after Mumbai office opening",
                "description": "China urged India on Thursday to handle Taiwan issues with caution and avoid interference in the improvement of Sino-India relations following the opening of...",
                "url": "https://sg.news.yahoo.com/china-urges-india-handle-taiwan-085607891.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
                "publishedAt": "2024-10-17T08:56:07Z",
                "content": "BEIJING (Reuters) - China urged India on Thursday to handle Taiwan issues with caution and avoid interference in the improvement of Sino-India relations following the opening of another Taiwan de fac… [+1368 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "The Associated Press",
                "title": "Putin hosts a summit in a bid to show the West it can't keep Russia off the global stage",
                "description": "The Kremlin will be able to talk to major players like India and China about expanding trade and bypassing Western sanctions.",
                "url": "https://www.npr.org/2024/10/21/g-s1-29150/putin-hosts-a-summit-in-a-bid-to-show-the-west-it-cant-keep-russia-off-the-global-stage",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8639x4859+0+450/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F14%2F3c%2F19b00f3c4c80847d24693ad511d3%2Fap24292498289420.jpg",
                "publishedAt": "2024-10-21T05:55:04Z",
                "content": "In the coming days, Russian President Vladimir Putin will be shaking hands with multiple world leaders, including China's Xi Jinping, India's Narendra Modi, Turkey's Recep Tayyip Erdogan and Iran's M… [+7427 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "The Associated Press",
                "title": "Canada expels India's top diplomat and alleges wider diplomatic involvement in crimes",
                "description": "Canada expelled India’s top diplomat in the country and five others over last year's killing of a Sikh activist in British Columbia. India rejected the charges and said it would expel Canadian envoys.",
                "url": "https://www.npr.org/2024/10/15/g-s1-28245/canada-expels-indias-top-diplomat-and-alleges-wider-diplomatic-involvement-in-crimes",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2250+0+208/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F4e%2F4a%2F1d83404a41048393b391093df5d4%2Fap24288755651266.jpg",
                "publishedAt": "2024-10-15T05:32:32Z",
                "content": "TORONTO Canada said it has identified Indias top diplomat in the country as a person of interest in the assassination of a Sikh activist there and expelled him and five other diplomats Monday, in an … [+5317 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Jane Ridley",
                "title": "I moved across the world to live with my son and daughter-in-law. It was a sacrifice, but I wanted to help with childcare.",
                "description": "A grandmother gave up her life in India to support her son and daughter-in-law in the US by providing free childcare for her grandkids.",
                "url": "https://www.businessinsider.com/grandparents-moved-from-india-to-us-provide-free-childcare-2024-10",
                "urlToImage": "https://i.insider.com/6705a4eb3f2165d716df6564?width=1200&format=jpeg",
                "publishedAt": "2024-10-15T16:20:44Z",
                "content": "Nan Ray, not pictured, moved from India to the US because she felt it was her grandmotherly \"duty\" to care for her grandchildren.Mayur Kakade/ Getty Images\r\n<ul><li>Nan Ray moved from India to live w… [+3487 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Pete Syme",
                "title": "An apparent bomb threat saw over 200 Air India passengers stranded in Canada's freezing remote north before the air force picked them up",
                "description": "An Air India Boeing 777 diverted to Canada's Nunavut territory after an online security threat. The Canadian Air Force took passengers to Chicago.",
                "url": "https://www.businessinsider.com/air-india-passengers-ferried-by-canadian-air-force-after-diversion-2024-10",
                "urlToImage": "https://i.insider.com/67123cb7a0a0cc14f221ee9d?width=1200&format=jpeg",
                "publishedAt": "2024-10-18T11:18:57Z",
                "content": "An Air India Boeing 777 was diverted to northern Canada this week after a bomb threat.MI News/NurPhoto via Getty Images\r\n<ul><li>An Air India flight to Chicago diverted due to what a Canadian ministe… [+2725 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Theron Mohamed",
                "title": "Voters worldwide are angry about higher prices and keep punishing those in power",
                "description": "Incumbent governments have lost ground in Britain, France, Japan, India, and elsewhere this year, setting the stage for Donald Trump's victory.",
                "url": "https://www.businessinsider.com/trump-harris-election-incumbents-inflation-living-costs-immigration-economy-politics-2024-11",
                "urlToImage": "https://i.insider.com/672e61375ec9bfa3d63cb538?width=1200&format=jpeg",
                "publishedAt": "2024-11-09T10:13:19Z",
                "content": "Kamala Harris, Rishi Sunak, Emmanuel Macron, and Narendra Modi.Andrew Harnik/Getty Images, Kevin Lamarque-Pool/Getty Images, Michael Campanella/Getty Images,Kay Nietfeld/Getty Images.\r\n<ul><li>Pandem… [+5059 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Tom Porter,Hannah Abraham",
                "title": "Xi undercut the West by negotiating a truce in China's long feud with India",
                "description": "India's move to reduce tensions with China may make it a less willing partner of the West in the Quad alliance.",
                "url": "https://www.businessinsider.com/xi-undercut-west-negotiating-truce-in-chinas-feud-with-india-2024-10",
                "urlToImage": "https://i.insider.com/671b776101ea6d83dee4051a?width=1024&format=jpeg",
                "publishedAt": "2024-10-25T15:46:11Z",
                "content": "Chinese President Xi Jinping and Indian Prime Minister Narendra Modi on the sidelines of the BRICS Summit.Xinhua News Agency/Xinhua News Agency via Getty Images\r\n<ul><li>China's Xi Jinping negotiated… [+5460 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Ryan Lucas",
                "title": "Sikh separatist, targeted once for assassination, says India still trying to kill him",
                "description": "The alleged assassination attempt of a Sikh activist in the U.S. is part of a broader trend around the world in which foreign governments seek to silence critics overseas.",
                "url": "https://www.npr.org/2024/10/27/g-s1-29561/sikh-separatist-assassination-india",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4900x2756+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0e%2F56%2F94ac7ae14d2083dcecc9538ed002%2Fnpr-jeenah-0005.JPG",
                "publishedAt": "2024-10-27T09:15:00Z",
                "content": "It is a phone call Gurpatwant Singh Pannun remembers well. It was June 17, 2023. After playing phone tag for a day, he and his close aide in Canada finally managed to connect.\r\nHe told me that he was… [+8545 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Sandhya Dirks",
                "title": "Sikhs march across California urging protections against threats from India on U.S. soil",
                "description": "Sikh activists marched 350 miles across California in October, marking the 40th anniversary of a massacre and calling for protection from what they say is a growing threat —  transnational repression from the Indian government.",
                "url": "https://www.npr.org/2024/11/02/nx-s1-5157929/sikhs-march-across-california-urging-protections-against-threats-from-india-on-u-s-soil",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6985x3929+0+364/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fbf%2F3e%2F9944d1304a12b14c575004594ea0%2Ffearlessforjusticemarch-mikekaichen-selects-toned-4.jpg",
                "publishedAt": "2024-11-02T12:09:13Z",
                "content": "In the dirt path between a rural road and a persimmon orchard, around 30 people are walking, kicking up dust with each step. Children run towards the front of the march, where a group of older men wi… [+9112 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India Unveils $109 Billion Transmission Plan for Green Power",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c6e4c95e-dd2b-4ef5-8de9-85f94b353824",
                "urlToImage": null,
                "publishedAt": "2024-10-15T10:48:32Z",
                "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Matthew Gault",
                "title": "Neom, Saudi Arabia’s Futuristic City, Suddenly Loses Its CEO",
                "description": "Pitched as a mix of ‘Blade Runner’ and ‘Jurassic Park,’ Neom is the world’s biggest construction project. Twenty-one thousand people have died so far to make it happen.",
                "url": "https://gizmodo.com/neom-saudi-arabias-futuristic-city-suddenly-loses-its-ceo-2000523724",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/11/NEOMFUTURE.jpg",
                "publishedAt": "2024-11-12T19:30:38Z",
                "content": "Neom, Saudi Arabias urban development project thats building the city of the future in the middle of the desert, has lost its leader. Nadhmi al-Nasr, a Saudi chemical engineer, has led the project si… [+2321 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Matthew Gault",
                "title": "The EU’s Fines Against Elon Musk May Be Much Larger Than Anticipated",
                "description": "The European Union is making a decision that may cause any potential fines against Musk to skyrocket.",
                "url": "https://gizmodo.com/the-eus-fines-against-elon-musk-may-be-much-larger-than-anticipated-2000513026",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/MuskSad.jpg",
                "publishedAt": "2024-10-17T16:30:46Z",
                "content": "The European Union is considering levying fines against Elon Musk over his unwillingness to cooperate with an investigation into Xs moderation and advertising policies. According to a report from Blo… [+2388 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "SHEIKH SAALIQ",
                "title": "Canada-India dispute over assassination allegations could impact Modi's global ambitions",
                "description": "A diplomatic row that has strained bilateral relations between India and Canada for over a year has boiled over as the countries expelled each other’s top...",
                "url": "https://www.yahoo.com/news/india-canada-ties-were-already-115901937.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/GTL7xMS9gDTg5_XiErgCWg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/e8427cae2db5994cb2f9405fc1bddd8e",
                "publishedAt": "2024-10-15T11:59:01Z",
                "content": "NEW DELHI (AP) A diplomatic row that has strained bilateral relations between India and Canada for over a year has boiled over as the countries expelled each others top diplomats over the killing of … [+5785 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Reuters",
                "title": "Burger King India operator's quarterly loss widens on sluggish fast-food demand",
                "description": "Global fast-food chains are struggling to attract consumers in India, a highly price-sensitive market where consumers have been cutting back on discretionary...",
                "url": "https://sg.finance.yahoo.com/news/burger-king-india-operators-quarterly-132525324.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/6657e230998a20df304b2b94668478a1",
                "publishedAt": "2024-10-28T13:25:25Z",
                "content": "(Reuters) - Restaurant Brands Asia, the India franchisee of Burger King, reported a wider second-quarter loss on Monday, as budget-conscious consumers reduced spending.\r\nGlobal fast-food chains are s… [+1584 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Pictures from space show mighty smog choking Lahore",
                "description": "The smog covering Pakistan's second largest city has been captured in satellite images.",
                "url": "https://www.bbc.com/news/articles/cm20k76d5xno",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/dfac/live/77f149a0-9dc3-11ef-935d-3107d1c873e8.jpg",
                "publishedAt": "2024-11-09T01:31:35Z",
                "content": "A thick blanket of smog has derailed normal activity for most people \r\nSmog starts slow.\r\nAt first, you cannot see it but you can smell it. It smells like something is burning. And it intensifies as … [+6458 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "James Doubek",
                "title": "Fake bomb threats disrupt travel for scores of flights on Indian airlines",
                "description": "Bomb threats are causing disruptions, diversions and delays for scores of flights on multiple Indian airlines. Indian authorities said they were looking to increase punishments for perpetrators.",
                "url": "https://www.npr.org/2024/10/21/nx-s1-5159742/bomb-threats-india-airlines-flights",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4497x2530+0+303/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fe4%2Fa4%2Fc5893c2041c0a22849c34f2f9c18%2Fgettyimages-1665773376.jpg",
                "publishedAt": "2024-10-21T22:17:14Z",
                "content": "A surge of hoax bomb threats has caused significant disruption to travel for passengers on major airlines in India in recent days.\r\nOver the past week, 100 threats were made against flights, Indian m… [+2096 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India, China reach pact to resolve border conflict, Indian foreign minister says",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_931b2efd-8494-46cc-94ae-869f3daad213",
                "urlToImage": null,
                "publishedAt": "2024-10-21T09:31:36Z",
                "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Elderly man beaten to death for complaining about neighbours’ fireworks in India",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_494c158c-e797-4bf8-892d-be3de93d0887",
                "urlToImage": null,
                "publishedAt": "2024-11-04T11:47:10Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India should join China-backed Asian trade bloc, government think tank CEO says",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c14befce-6562-4347-b0fe-30630f13ba22",
                "urlToImage": null,
                "publishedAt": "2024-11-07T07:10:33Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Swiss companies set sights on India as $100 billion trade pact promises more opportunities",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e7e30e8d-3c8c-4648-9d8b-ade5794c4cb1",
                "urlToImage": null,
                "publishedAt": "2024-10-28T06:09:33Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India evacuates hundreds of thousands of people and shuts schools as a tropical storm nears",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_02590514-e4f2-4a44-8483-f1926e9334e5",
                "urlToImage": null,
                "publishedAt": "2024-10-24T05:28:30Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "OPPO's answer to the Galaxy S25 is launching globally on November 21",
                "description": "OPPO is launching the Find X8 and X8 Pro globally on November 21, with both devices touting considerable upgrades.",
                "url": "https://www.androidcentral.com/phones/oppos-answer-to-the-galaxy-s25-is-launching-globally-on-november-21",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/73yMdYyMsT9vqgfUfLFYFY-1200-80.jpg",
                "publishedAt": "2024-11-11T09:03:30Z",
                "content": "What you need to know\r\n<ul><li>OPPO is launching the Find X8 globally at a launch event in Bali on November 21.</li><li>The phones will launch alongside the global debut of Android 15-based ColorOS 1… [+1785 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
                "title": "After launching on Pixels, this Motorola phone is getting a taste of Android 15",
                "description": "Pixel phones just got the official Android 15. Motorola has quickly rolled out Android 15 in beta on its latest Edge series phone.",
                "url": "https://www.androidcentral.com/apps-software/motorola-edge-50-fusion-gets-android-15-beta",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/skASRE5PwdHQGoTTr98rLg-1200-80.jpg",
                "publishedAt": "2024-10-16T17:48:54Z",
                "content": "What you need to know\r\n<ul><li>Motorola Edge 50 Fusion gets the October security patch, which also brings Android 15 for some lucky users.</li><li>An X user in India with the handset has recently rec… [+3092 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "Leaked Galaxy A36 renders suggest Samsung's making old-school new again",
                "description": "A batch of alleged imagery depicting the Galaxy S36 5G has surfaced.",
                "url": "https://www.androidcentral.com/phones/early-samsung-galaxy-a36-5g-leaked-renders",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/28YjMqgjSaK6YPzth9iU3c-1200-80.jpg",
                "publishedAt": "2024-10-18T19:29:24Z",
                "content": "What you need to know\r\n<ul><li>A batch of alleged Galaxy S36 5G renderings surfaced and suggested the device could grab a Galaxy Note 10-like camera array change.</li><li>The front of the A36 5G mirr… [+3034 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Will Shanklin",
                "title": "Apple Intelligence is coming to EU iPhones and iPads in April",
                "description": "Folks in the European Union finally know when Apple Intelligence will be available on their mobile devices. Apple told EU users on Monday that its AI suite will arrive in April 2025. The first Apple Intelligence features, including Writing Tools and AI notifi…",
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_9e418204-613e-41ea-849e-1acac15729e7",
                "urlToImage": null,
                "publishedAt": "2024-10-28T19:10:28Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Monica Humphries",
                "title": "A chalet girl at one of the world's most luxurious ski destination shares what the winter wonderland for the wealthy is like. Take a look around.",
                "description": "Courchevel 1850 is a ritzy ski resort in the French Alps with Gucci gondolas, 5-star chalets, and skiers toting designer shopping bags on chairlifts.",
                "url": "https://www.businessinsider.com/courchevel-1850-france-most-luxurious-ski-resort-world-2022-11",
                "urlToImage": "https://i.insider.com/6377c44491af1b0018f3e410?width=1200&format=jpeg",
                "publishedAt": "2024-10-31T16:05:15Z",
                "content": "Courchevel 1850 is a ritzy ski resort that caters to the ultra-rich.JARRY/TRIPELON/Gamma-Rapho/Getty Images/India Hogg/India Hogg\r\n<ul>\n<li>Courchevel 1850 is one of the world's most luxurious ski re… [+12280 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Queen to miss Remembrance events after illness",
                "description": "Buckingham Palace says the Queen hopes to return to public duties early next week.",
                "url": "https://www.bbc.com/news/articles/clygq4j338go",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8371/live/a67a9440-9e9d-11ef-9260-19e6a950e830.jpg",
                "publishedAt": "2024-11-09T13:18:57Z",
                "content": "The Queen will miss Remembrance events this weekend while she recovers from a chest infection, Buckingham Palace has said.\r\nA statement said Queen Camilla was \"following doctors guidance to ensure a … [+2100 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Ajit Solanki / AP",
                "title": "Modi and Spain’s Sanchez Launch India’s First Private Military Aircraft Plant",
                "description": "PM Narendra Modi and his Spanish counterpart Pedro Sanchez inaugurated the plant in Gujarat state's Vadodara city on Monday.",
                "url": "https://time.com/7099288/modi-sanchez-india-spain-military-aircraft-plant/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/10/AP24302201219172.jpg?quality=85&w=1024&h=628&crop=1",
                "publishedAt": "2024-10-28T11:26:13Z",
                "content": "VADODARA, India Indian Prime Minister Narendra Modi and his Spanish counterpart Pedro Sanchez inaugurated India's first private military aircraft plant on Monday, boosting New Delhi's ambitions of gr… [+3141 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Matthew Gault",
                "title": "Billionaires Are the One Case Where Personal Choices Can Affect Climate Change",
                "description": "A new study found that half of the world’s carbon emissions come from the richest 10% of people.",
                "url": "https://gizmodo.com/billionaires-are-the-one-case-where-personal-choices-can-affect-climate-change-2000518380",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/ElonPrivateJet.jpg",
                "publishedAt": "2024-10-30T15:50:09Z",
                "content": "Jezz Bezos and Elon Musk emit more carbon pollution in 90 minutes than the average human does in their entire life. Thats according to a new report from Oxfam International, a British NGO that fights… [+3309 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Matthew Gault",
                "title": "Surreal Gambling Site Sees Users Bet on Thousands of Dimly Lit and Short-Lived Soccer Matches Every Day",
                "description": "The gambling website of dubious origins has millions of daily visitors for table tennis, air hockey, and bench soccer. Teens as young as 14 play in some of the games.",
                "url": "https://gizmodo.com/surreal-gambling-site-sees-users-bet-on-thousands-of-dimly-lit-and-short-lived-soccer-matches-every-day-2000514445",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/1xbet.jpg",
                "publishedAt": "2024-10-21T16:15:42Z",
                "content": "Every day on the gambling site 1xbet, thousands of sports matches air that the degenerate gambler can lay odds on. There are games like hockey, soccer, and basketball but they dont look quite right. … [+2751 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "How relations between India and Canada hit rock bottom",
                "description": "India and Canada expelled diplomats as tensions rose over last year's killing of a Sikh separatist in Canada.",
                "url": "https://www.bbc.com/news/articles/c89lne2k87vo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e76c/live/e9684360-8ab6-11ef-b6b0-c9af5f7f16e4.jpg",
                "publishedAt": "2024-10-15T08:06:28Z",
                "content": "Indian PM Narendra Modi (right) shakes hand with Canada's Justin Trudeau ahead of the G20 summit in September 2023\r\nIndia and Canada have expelled their top diplomats amid escalating tensions over th… [+7120 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Strangeloopcanon.com"
                },
                "author": "Rohit Krishnan",
                "title": "Life in India is a series of bilateral negotiations",
                "description": "finding the new equilibrium for the next superpower",
                "url": "https://www.strangeloopcanon.com/p/life-in-india-is-a-series-of-bilateral",
                "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F41ee51e4-9ab4-4e55-80d0-e33ccf4d1d53_1280x720.jpeg",
                "publishedAt": "2024-10-16T08:17:09Z",
                "content": "When I landed in India last week, my friend came to pick us up. And as we got in his car and started to drive out, we went the wrong way inside the giant parking garage at Delhi airport where all dir… [+11764 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Ariba Shahid",
                "title": "Lahore air pollution hits historic high, forcing school closures",
                "description": "Unprecedented air pollution levels in Pakistan's second-largest city of Lahore prompted authorities to take emergency measures on Sunday, including issuing...",
                "url": "https://www.yahoo.com/news/lahore-air-pollution-hits-historic-112003693.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/3e756080dd2829f7bdf39bbbb7829ba8",
                "publishedAt": "2024-11-03T11:20:03Z",
                "content": "By Ariba Shahid\r\nKARACHI (Reuters) - Unprecedented air pollution levels in Pakistan's second-largest city of Lahore prompted authorities to take emergency measures on Sunday, including issuing work-f… [+1668 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Cool Hunting"
                },
                "author": "Evan Orensten",
                "title": "Upcycled Sail Kites",
                "description": "These colorful kites are handmade in India with upcycled spinnaker sails, spools made from recycled plastic and bamboo. Each comes with 50m of cotton string in a recycled cardboard package, a bag, …",
                "url": "http://coolhunting.com/buy/upcycled-sail-kites/",
                "urlToImage": "https://150102931.v2.pressablecdn.com/wp-content/uploads/2024/11/BA9CC3AA-972D-41DA-92B2-471B77429D19_1_201_a.jpeg",
                "publishedAt": "2024-11-13T22:45:17Z",
                "content": "VollebakVollebak’s Martian Aerogel Jacket has been re-editioned and will now be available in three different colors. This innovative piece combines aerospace-grade materials and cutting-edge insulati… [+861 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "techkritiko@gmail.com (Jay Bonggolto)",
                "title": "Nothing unveils the Phone 2a Plus with a glow-up back that shines in the dark",
                "description": "Nothing's latest phone glows in the dark, though tracking it down in stores might be a challenge.",
                "url": "https://www.androidcentral.com/phones/nothing-unveils-the-phone-2a-plus-with-a-glow-up-back-that-shines-in-the-dark",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/6Si8vAkHYiecADrgCZnvDj-1200-80.jpg",
                "publishedAt": "2024-10-31T07:23:59Z",
                "content": "What you need to know\r\n<ul><li>The Nothing Phone (2a) Plus Community Edition is a first for Nothing, made with input from fans, while keeping the same internals as the regular model.</li><li>The proj… [+2674 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
                "title": "Some Galaxy S25 models might still opt for an Exynos chip instead of Snapdragon 8 Elite",
                "description": "Samsung has launched the Galaxy S24 series with an Exynos chip in some regions other than the U.S., and that is likely to happen with the successor models, too.",
                "url": "https://www.androidcentral.com/phones/samsung-galaxy-s25-models-to-opt-for-flagship-exynos-soc-again",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/yFmLhsbp8G89X6TVQ6Twh5-1200-80.jpg",
                "publishedAt": "2024-11-06T19:58:50Z",
                "content": "What you need to know\r\n<ul><li>Samsung is expected to launch the Galaxy S25 series earlier than the predecessor models.</li><li>New benchmark tests might have given away the Exynos chipset with which… [+3138 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "shubhangigoel@insider.com (Shubhangi Goel)",
                "title": "Nissan is slashing 9,000 jobs after a dire financial performance",
                "description": "The company is also cutting production capacity by 20%.",
                "url": "https://www.businessinsider.com/nissan-cutting-9-000-jobs-globally-production-capacity-reduce-costs-2024-11",
                "urlToImage": "https://i.insider.com/672c760988cea3ba1c1edbb2?width=1200&format=jpeg",
                "publishedAt": "2024-11-07T08:26:13Z",
                "content": "Nissan is cutting 9,000 jobs globally in an effort to cut costs, the Japanese automobile giant said in an earnings statement on Thursday.\r\nNissan said that sales volumes decreased year-on-year to 1.6… [+1160 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Nivedita Bhattacharjee",
                "title": "US startup Axiom Space explores using Indian rockets for space mission",
                "description": "U.S.-based startup Axiom Space is exploring using Indian launch vehicles to support its international space station mission, a senior executive said on...",
                "url": "https://finance.yahoo.com/news/us-startup-axiom-space-explores-081517460.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/a17d02931fc7b4e8a519a7d27d60477f",
                "publishedAt": "2024-11-05T08:15:17Z",
                "content": "By Nivedita Bhattacharjee\r\nNEW DELHI (Reuters) - U.S.-based startup Axiom Space is exploring using Indian launch vehicles to support its international space station mission, a senior executive said o… [+1897 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Aditya Kalra",
                "title": "Indian retail group seeks antitrust probe of quick commerce companies Swiggy, Blinkit, Zepto",
                "description": "India's biggest group of retail distributors has asked the antitrust authority to investigate three quick commerce companies - Zomato's Blinkit, Swiggy and...",
                "url": "https://sg.finance.yahoo.com/news/indian-retail-group-seeks-antitrust-152927954.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/39c48c952cd83150883ef2b8cac5e1ea",
                "publishedAt": "2024-10-20T15:29:27Z",
                "content": "By Aditya Kalra\r\nNEW DELHI (Reuters) - India's biggest group of retail distributors has asked the antitrust authority to investigate three quick commerce companies - Zomato's Blinkit, Swiggy and Zept… [+2240 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Kamala Thiagarajan",
                "title": "Pakistan's smog is visible from space. This activist is 'frustrated' but won't give up",
                "description": "The government in Lahore has closed schools and public spaces and shut down factories. Environmental lawyer Ahmad Rafay Alam shares his perspective: \"frustrated\" but still fighting.",
                "url": "https://www.npr.org/sections/goats-and-soda/2024/11/13/g-s1-33685/smog-air-quality-pollution-pakistan-lahore",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4000x2250+0+208/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F97%2F96%2F423014fc4d8a8e635d45e237bfa4%2Fpakistan-smog-3.jpg",
                "publishedAt": "2024-11-13T12:41:36Z",
                "content": "A thick, toxic smog has shut down life in Pakistan's second largest city, Lahore, home to more than 14 million residents.\r\nSchools, offices and public spaces\r\n are closed.\r\nThat came after a senior p… [+11844 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "htan@insider.com (Huileng Tan)",
                "title": "Putin's dollar problem is on clear display at the BRICS summit, starting with the moment guests land at the airport",
                "description": "Mastercard and Visa halted operations in Russia. Most Russian banks only take US dollars or euros to exchange for rubles.",
                "url": "https://www.businessinsider.com/dedollarization-russia-brics-summit-foreign-attendees-cash-usd-euros-putin-2024-10",
                "urlToImage": "https://i.insider.com/67186a27a0a0cc14f22328a3?width=1200&format=jpeg",
                "publishedAt": "2024-10-23T09:08:09Z",
                "content": "Russian President Vladimir Putin is hosting a major summit with over 20 world leaders, whom he's trying to convince to ditch the dollar.\r\nDe-dollarization is one of Putin's priorities because trading… [+3309 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Son of Lord Lucan nanny searches for her killer",
                "description": "Fifty years after his mother's death, Neil Berriman embarks on a search for murderer Lord Lucan.",
                "url": "https://www.bbc.com/news/articles/cwygj7l2wxro",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d799/live/a19a5750-9b8f-11ef-8dbf-615b9ee7e3ad.png",
                "publishedAt": "2024-11-06T06:00:52Z",
                "content": "Neil Berriman's mother was at the centre of an infamous murder case\r\nA brown envelope changed Neil Berriman's life forever.\r\nThe builder from Hampshire found it in a chest of drawers belonging to his… [+3478 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Matías S. Zavia",
                "title": "España y la India se han unido para eclipsar el Sol: la insólita misión Proba-3 despegará en diciembre",
                "description": "Ha tardado años en gestarse, pero la misión espacial Proba-3 de la Agencia Espacial Europea (ESA) partió al fin hacia la India para su lanzamiento. Liderada por la empresa española SENER, Proba-3 consta de dos satélites que se sincronizarán en vuelo para cons…",
                "url": "https://www.xataka.com/espacio/espana-india-se-han-unido-para-eclipsar-sol-dos-satelites-pionera-mision-espacial-proba-3",
                "urlToImage": "https://i.blogs.es/d28506/proba-3_satellites_form_artificial_eclipse/840_560.jpeg",
                "publishedAt": "2024-11-11T18:00:03Z",
                "content": "Ha tardado años en gestarse, pero la misión espacial Proba-3 de la Agencia Espacial Europea (ESA) partió al fin hacia la India para su lanzamiento. Liderada por la empresa española SENER, Proba-3 con… [+3552 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Manish Singh",
                "title": "India issues notice to Wikipedia over concerns of bias",
                "description": "Wikipedia is facing mounting regulatory pressure in India as local authorities question whether the platform should continue to enjoy legal protections as a ...",
                "url": "https://techcrunch.com/2024/11/05/india-issues-notice-to-wikipedia-over-concerns-of-bias/",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/UYvcibjJKcCxbzcWjoomMQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/049925db7a71492cfbdcd68fd4c0165b",
                "publishedAt": "2024-11-05T11:24:03Z",
                "content": "Wikipedia is facing mounting regulatory pressure in India as local authorities question whether the platform should continue to enjoy legal protections as a neutral intermediary rather than being cla… [+1836 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India, China and S.Africa leaders bolster Putin at key summit",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ca1e3643-ba91-4304-b0e3-5f4b9c1af35b",
                "urlToImage": null,
                "publishedAt": "2024-10-22T17:00:35Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "BeauHD",
                "title": "Amazon Ditches Plastic Air Pillows",
                "description": "Amazon has reached its goal set earlier this year to completely get rid of plastic air pillows at its warehouses by the end of the year. \"As of October 2024, we've removed all plastic air pillows from our delivery packaging used at our global fulfillment cent…",
                "url": "https://news.slashdot.org/story/24/10/21/233222/amazon-ditches-plastic-air-pillows",
                "urlToImage": "https://a.fsdn.com/sd/topics/earth_64.png",
                "publishedAt": "2024-10-22T02:10:00Z",
                "content": "It's a welcome change following years of pressure from environmental groups to stop plastic pollution flooding into oceans. The company is still working to reduce the use of single-use plastics more … [+870 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Charles Maynes",
                "title": "A defiant Putin closes global summit aimed at reshaping global order",
                "description": "Russian President Vladimir Putin neither confirms nor denies the presence of North Korean troops in Ukraine. Putin’s comments came during a press conference at a Russian-hosted summit for the world’s top developing economies.",
                "url": "https://www.npr.org/2024/10/24/nx-s1-5164502/putin-russia-china-north-korea-ukraine-brics",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5609x3155+0+347/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F23%2Ff5%2F537c462a45fab4d918331c694376%2Fap24298583220177.jpg",
                "publishedAt": "2024-10-25T03:50:30Z",
                "content": "MOSCOW, Russia The Kremlins message boiled down to this: we still have plenty of friends in the world.\r\nOver three days in the Russian city of Kazan, Russian President Vladimir Putin hosted more than… [+4559 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (Charles Martin)",
                "title": "India moves to restrict imports of Apple's MacBook Pro",
                "description": "India wants to sharply cut imports of laptops like the MacBook Pro in order to force all technology firms to boost local manufacturing.Foxconn facilities will play a key role in Apple's expansion into India — image credit: FoxconnA similar plan to restrict im…",
                "url": "https://appleinsider.com/articles/24/10/19/india-moves-to-restrict-imports-of-apples-macbook-pro",
                "urlToImage": "https://photos5.appleinsider.com/gallery/61449-126950-56614-115091-46275-90150-000-lead-Foxconn-xl-xl-xl.jpg",
                "publishedAt": "2024-10-19T19:28:06Z",
                "content": "India wants to sharply cut imports of laptops like the MacBook Pro in order to force all technology firms to boost local manufacturing.\r\nA similar plan to restrict imports of personal computing produ… [+1471 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Hoax bomb threats spark panic for Indian airlines",
                "description": "At least 10 Indian flights got hoax bomb threats over the past 48 hours, causing long delays and diversions.",
                "url": "https://www.bbc.com/news/articles/c30l4gp6z6mo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0331/live/b8d6c860-8b6b-11ef-a544-4baa02e76677.jpg",
                "publishedAt": "2024-10-16T05:43:13Z",
                "content": "At least 10 Indian flights have received hoax bomb threats over the past 48 hours, leading to long delays and diversions.\r\nOn Tuesday, Singapore's Air Force sent two fighter jets to escort an Air Ind… [+2741 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Atlantic"
                },
                "author": "Alan Taylor",
                "title": "Photos of the Week: Beach Bus, Ghost Dog, Celtic Fire",
                "description": "Autumn colors across Europe, Day of the Dead displays in Mexico, Diwali lights in India, deadly flooding in Spain, World Series celebrations in Los Angeles, and much more",
                "url": "https://www.theatlantic.com/photo/2024/11/photos-of-the-week-beach-bus-ghost-dog-celtic-fire/680481/",
                "urlToImage": "https://cdn.theatlantic.com/thumbor/wjmXNvnS4ie-zcNKbWJGer0iIO4=/0x146:2000x1188/960x500/media/img/photo/2024/10/photos-week-4/a01_AP24304330746902-1/original.jpg",
                "publishedAt": "2024-11-01T15:00:00Z",
                "content": "Autumn colors across Europe, Day of the Dead displays in Mexico, Diwali lights in India, deadly flooding in Spain, a kite festival in South Africa, the School of Santa Claus in Brazil, World Series c… [+130 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ndtvprofit.com"
                },
                "author": "Shreya Sur",
                "title": "India's Renewable Energy Capacity Hits 200 GW Milestone, Accounts for 46.3%",
                "description": "India reaches 200 GW renewable energy capacity, accounting for 46.3% of total power. Discover India's progress towards a sustainable energy future.",
                "url": "https://www.ndtvprofit.com/business/india-renewable-energy-hits-200-gw-milestone-46-percent-total-power",
                "urlToImage": "https://media.assettype.com/bloombergquint%2F2024-10-14%2F4aawmdz0%2Fdeveloping-renewable-energy-investment-funds-ar-generative-ai1198270-124137.jpg?w=1200&auto=format%2Ccompress&ogImage=true",
                "publishedAt": "2024-10-15T06:39:37Z",
                "content": "India has reached a key milestone in renewable energy, with the countrys total renewable energy capacity exceeding 200 gigawatts as of Oct. 10, 2024, according to the Central Electricity Authority. T… [+955 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "Android 15-based OxygenOS 15 is launching sooner than you think",
                "description": "OnePlus is introducing the Android 15-based OxygenOS 15 on October 24 — just a week from now.",
                "url": "https://www.androidcentral.com/apps-software/android-15-based-oxygenos-15-is-launching-sooner-than-you-think",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/rXSUQdURZW9sgRmzMZ2jjT-1200-80.jpg",
                "publishedAt": "2024-10-17T14:26:40Z",
                "content": "Google rolled out the stable version of Android 15 earlier in the week, and OnePlus just announced that its custom skin is ready to make its debut. OnePlus India is hosting an online event on October… [+1700 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Theregister.com"
                },
                "author": "Simon Sharwood",
                "title": "India, Nvidia, discuss jointly developed AI chip",
                "description": "Current capabilities mean local manufacturing is not likely – but a chip tuned to Indian needs could work\nIndia's government is reportedly in talks with Nvidia to co-develop AI silicon.…",
                "url": "https://www.theregister.com/2024/10/22/india_nvidia_collaboration/",
                "urlToImage": "https://regmedia.co.uk/2022/04/29/shutterstock_india_flag_silicon.jpg",
                "publishedAt": "2024-10-22T04:26:09Z",
                "content": "India's government is reportedly in talks with Nvidia to co-develop AI silicon.\r\nLocal outlet the Economic Times on Tuesday quoted minister for electronics and IT Ashwini Vaishnaw as confirming \"Yes,… [+1699 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Guilty pleas over killing of man acquitted in 1985 Air India bombings",
                "description": "Two hitmen entered guilty pleas of second-degree murder over the 2022 shooting in Canada of Ripudaman Singh Malik.",
                "url": "https://www.bbc.com/news/articles/ckg2grke83yo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/da40/live/a233f370-9003-11ef-b340-6103718ac3b8.jpg",
                "publishedAt": "2024-10-21T23:29:30Z",
                "content": "Two hitmen have pleaded guilty in a Canadian court over the shooting of a man acquitted of the 1985 bombing of an Air India flight.\r\nTanner Fox and Jose Lopez pleaded guilty to the second-degree murd… [+2708 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "India evacuating more than a million people as Cyclone Dana nears",
                "description": "Schools in coastal Odisha and West Bengal have been shut and trains and flights have been cancelled.",
                "url": "https://www.bbc.com/news/articles/c89vw50kj3yo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3e81/live/e174ad80-91d0-11ef-8581-cd31a4127fee.jpg",
                "publishedAt": "2024-10-24T09:27:07Z",
                "content": "Cyclone Dana is expected to make a landfall in the next 24 hours\r\nAuthorities in India are evacuating nearly 1.5 million people from the path of an approaching cyclone in the eastern states of Odisha… [+2106 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "AFP",
                "title": "Airlines around Asia ground Bali flights after volcano erupts",
                "description": "Airlines in Australia, Hong Kong, India, Malaysia and Singapore cancelled flights to and from the Indonesian resort island of Bali on Wednesday, after a...",
                "url": "https://www.yahoo.com/news/airlines-around-asia-ground-bali-071431077.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BhaK7C2m7_QzPWN5hVeb3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://cf-images.us-east-1.prod.boltdns.net/v1/jit/6415665815001/b42f9632-8a4f-4647-8d95-1d362477e48a/main/1280x720/16s981ms/match/image.jpg",
                "publishedAt": "2024-11-13T07:14:31Z",
                "content": "Airlines in Australia, Hong Kong, India, Malaysia and Singapore cancelled flights to and from the Indonesian resort island of Bali on Wednesday, after a nearby volcano catapulted an ash tower miles i… [+3258 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "9to5Mac"
                },
                "author": "Ryan Christoffel",
                "title": "Report: iPhone 17 early manufacturing set for India, marking new milestone for Apple",
                "description": "Apple just shipped the iPhone 16 last month, but it’s already working on the manufacturing process for next year’s iPhone 17 models. And in a milestone for the company’s supply chain, India is reportedly where early production units of the base iPhone 17 will…",
                "url": "https://9to5mac.com/2024/10/29/report-iphone-17-early-manufacturing-set-for-india-marking-new-milestone-for-apple/",
                "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/05/5B13C442-3FC6-40A3-9221-09CFA188E227.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2024-10-29T13:25:08Z",
                "content": "Apple just shipped the iPhone 16 last month, but its already working on the manufacturing process for next years iPhone 17 models. And in a milestone for the companys supply chain, India is reportedl… [+2261 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Riddhi Kanetkar",
                "title": "Nvidia CEO Jensen Huang says AI will do parts of some jobs 1,000 times better — but it won't completely replace people",
                "description": "Nvidia's CEO Jensen Huang thinks AI can't replace jobs, but that workers should use AI to automate their tasks to be more efficient.",
                "url": "https://www.businessinsider.com/jensen-huang-nvidia-ai-jobs-replace-summit-mumbai-2024-10",
                "urlToImage": "https://i.insider.com/671a28009b3250dbbce9b1aa?width=1200&format=jpeg",
                "publishedAt": "2024-10-24T11:39:49Z",
                "content": "Jensen Huang said that people who use automation are more likely to take other jobs. I-hwa Cheng/Getty\r\n<ul><li>Jensen Huang says AI can enhance jobs — but won't replace humans entirely.</li><li>AI c… [+1596 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "editorial-team@simplywallst.com (Simply Wall St)",
                "title": "3 Indian Growth Stocks Insiders Are Eager To Hold",
                "description": "The Indian market has experienced a flat week recently but has shown impressive growth over the past year with a 40% increase, and earnings are expected to...",
                "url": "https://finance.yahoo.com/news/3-indian-growth-stocks-insiders-010727659.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                "publishedAt": "2024-10-15T01:07:27Z",
                "content": "The Indian market has experienced a flat week recently but has shown impressive growth over the past year with a 40% increase, and earnings are expected to grow by 17% annually. In such an environmen… [+5326 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "WhatsApp scam victim transferred £20k",
                "description": "Felicity Campbell \"felt sick\" after realising she'd been scammed out of about £20,000.",
                "url": "https://www.bbc.com/news/articles/c1mlx1n1e5no",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2ad8/live/ad602e90-9f70-11ef-9260-19e6a950e830.jpg",
                "publishedAt": "2024-11-11T06:32:56Z",
                "content": "A woman says she felt sick when she was tricked into transferring £20,000 to criminals after being persuaded to share her screen on a WhatsApp call.\r\nFelicity Campbell has been describing the moment … [+4339 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Mayank Bhardwaj and Rajendra Jadhav",
                "title": "India's rice inventories hit record high, triples govt target",
                "description": "India's rice inventories surged to an all-time high of 29.7 million metric tons in November, sources said on Friday, nearly three times the government's...",
                "url": "https://sg.finance.yahoo.com/news/indias-rice-inventories-hit-record-103315061.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/9a6d3f08ee5e793f2a58110ae7891721",
                "publishedAt": "2024-11-08T10:33:15Z",
                "content": "By Mayank Bhardwaj and Rajendra Jadhav\r\nNEW DELHI (Reuters) - India's rice inventories surged to an all-time high of 29.7 million metric tons in November, sources said on Friday, nearly three times t… [+2446 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Theregister.com"
                },
                "author": "Laura Dobberstein",
                "title": "Starlink finally files proper paperwork to operate in India",
                "description": "Government both excited and cautious about benefits of Muskband\nStarlink is in the process of procuring clearances for operation in India according to the nation's telecom minister, Jyotiraditya Scindia.…",
                "url": "https://www.theregister.com/2024/11/14/starlink_india_again/",
                "urlToImage": "https://regmedia.co.uk/2021/11/10/shutterstock_satellite_broadband.jpg",
                "publishedAt": "2024-11-14T04:31:27Z",
                "content": "Starlink is in the process of procuring clearances for operation in India according to the nation's telecom minister, Jyotiraditya Scindia.\r\nElon Musk's space broadband company has already tried to e… [+2444 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Pooja Shah",
                "title": "I left my Big Tech job to bootstrap my own business. I went from making nearly $300,000 to not paying myself a salary.",
                "description": "In October 2023,  Soni Mehra left her job at Uber to focus on her home decor business full-time. She said it was the right time to take a risk.",
                "url": "https://www.businessinsider.com/left-big-tech-job-uber-entrepreneur-2024-10",
                "urlToImage": "https://i.insider.com/67235a9701ea6d83dee54f3e?width=1159&format=jpeg",
                "publishedAt": "2024-10-31T10:26:42Z",
                "content": "Soni Mehra launched Marble Lotus, a South Asian-inspired home decor company, in March 2023.Shekhar Mann\r\n<ul><li>In October 2023, Soni Mehra left her Big Tech job to focus on her own home decor busin… [+6060 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "bradypsnyder@gmail.com (Brady Snyder)",
                "title": "New Samsung Health features make it easier to stay on top of your wellness",
                "description": "Samsung Health users can now view their medical records, medication information, and log their meals in the app.",
                "url": "https://www.androidcentral.com/apps-software/new-samsung-health-features-medication-tracking-meal-logging",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/qwBAjDiVgrfxsqVNYWJwq7-1200-80.jpg",
                "publishedAt": "2024-10-22T16:59:05Z",
                "content": "What you need to know\r\n<ul><li>Samsung is improving the availability of health records, medication tracking, and meal logging in the Samsung Health app after partnering with leading health companies.… [+4150 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "TIME Staff",
                "title": "How TIME and Statista Determined the World’s Best Brands of 2024",
                "description": "This year, TIME launches its inaugural list of the World’s Best Brands, in partnership with Statista, a leading international provider of market and consumer data and rankings. Brands play a central role in consumer behavior, shaping preferences, choices, and…",
                "url": "https://time.com/7086638/worlds-best-brands-2024-methodology/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/10/Worlds-best-brands-2024-withlogo.jpg?quality=85&w=1200&h=628&crop=1",
                "publishedAt": "2024-10-15T13:53:07Z",
                "content": "This year, TIME launches its inaugural list of the World's Best Brands, in partnership with Statista, a leading international provider of market and consumer data and rankings. Brands play a central … [+1881 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
                "title": "Samsung Galaxy AI gains support for four new languages",
                "description": "Samsung also added a couple of dialects support to existing Galaxy AI languages as part of the rollout.",
                "url": "https://www.androidcentral.com/apps-software/samsung-galaxy-ai-gets-four-new-languages-support",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/PuYk8V3TDJc2DaTDvLxbye-1200-80.jpg",
                "publishedAt": "2024-10-24T16:19:12Z",
                "content": "What you need to know\r\n<ul><li>Samsung notes that these new four languages support \"advances its commitment to lowering barriers of language.\"</li><li>The new languages for Galaxy AI are Turkish, Dut… [+2655 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "The wait is over — OPPO's Find X8 and X8 Pro are launching globally",
                "description": "OPPO didn't launch its best phones outside China in the last two years, but that's changing with the Find X8 and X8 Pro.",
                "url": "https://www.androidcentral.com/phones/the-wait-is-over-oppos-find-x8-and-x8-pro-are-launching-globally",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/73yMdYyMsT9vqgfUfLFYFY-1200-80.jpg",
                "publishedAt": "2024-10-24T12:42:53Z",
                "content": "OPPO is doing all the right things with its phones, and the Find X7 Ultra has one of the best overall camera packages of any device I used in 2024. The only issue is that the device is exclusive to C… [+2254 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yanko Design"
                },
                "author": "Srishti Mitra",
                "title": "This School In India With An Undulating Green Roof & Sunken Courtyard Is A Relief From Boxy Classrooms",
                "description": "This School In India With An Undulating Green Roof & Sunken Courtyard Is A Relief From Boxy ClassroomsTucked away in Vijayawada, Andhra Pradesh, India is ‘Cocoon’ – the pre-primary extension of the Bloomingdale International School. This 4000 sqft extension i…",
                "url": "https://www.yankodesign.com/2024/10/25/this-school-in-india-with-an-undulating-green-roof-sunken-courtyard-is-a-relief-from-boxy-classrooms/",
                "urlToImage": "https://www.yankodesign.com/images/design_news/2024/10/cocoon/cocoon_yanko_design_03.jpg",
                "publishedAt": "2024-10-25T23:30:22Z",
                "content": "Tucked away in Vijayawada, Andhra Pradesh, India is ‘Cocoon’ – the pre-primary extension of the Bloomingdale International School. This 4000 sqft extension is designed by andblack design studio, and … [+2414 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Science Daily"
                },
                "author": null,
                "title": "Rare fossils of extinct elephant document the earliest known instance of butchery in India",
                "description": "Scientists have discovered the earliest evidence of animal butchery by humans in India.",
                "url": "https://www.sciencedaily.com/releases/2024/10/241021133245.htm",
                "urlToImage": "https://www.sciencedaily.com/images/scidaily-icon.png",
                "publishedAt": "2024-10-21T17:32:45Z",
                "content": "During the late middle Pleistocene, between 300 and 400 thousand years ago, at least three ancient elephant relatives died near a river in the Kashmir Valley of South Asia. Not long after, they were … [+5373 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Reuters",
                "title": "India eyes $87 billion investment in petrochemicals sector over next decade, says minister",
                "description": "\"As more citizens enter the middle class, the demand for a diverse range of products, many of which are derived from petrochemicals, is set to rise...",
                "url": "https://sg.finance.yahoo.com/news/india-eyes-87-billion-investment-141143562.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/fa89b1d4b96af6b7f6275973d2b31fd5",
                "publishedAt": "2024-10-18T14:11:43Z",
                "content": "(Reuters) - India is expected to receive investments worth $87 billion in the next decade to meet the nation's rising demand for petrochemicals, the country's oil minister Hardeep Singh Puri said on … [+1393 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Munsif Vengattil, Aditya Kalra and Aditi Shah",
                "title": "Musk's win on India satellite spectrum raises prospect of price war with Ambani",
                "description": "Having just lost a battle with Elon Musk over how India's satellite spectrum is awarded, Asia's richest man Mukesh Ambani could face a bigger challenge if...",
                "url": "https://sg.finance.yahoo.com/news/musks-win-india-satellite-spectrum-124344060.html",
                "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                "publishedAt": "2024-10-17T12:43:44Z",
                "content": "By Munsif Vengattil, Aditya Kalra and Aditi Shah\r\nNEW DELHI (Reuters) - Having just lost a battle with Elon Musk over how India's satellite spectrum is awarded, Asia's richest man Mukesh Ambani could… [+4432 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Musk reacts to Ambani lobbying, calls any India move to auction satellite spectrum 'unprecedented'",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c045539d-d3d3-4257-89d1-11a2097231e3",
                "urlToImage": null,
                "publishedAt": "2024-10-15T07:47:44Z",
                "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Global Funds Look to India as Financial Market Jitters Pick Up",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_04aa8138-75e8-4423-bcbb-302433424448",
                "urlToImage": null,
                "publishedAt": "2024-10-27T10:00:00Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Reuters",
                "title": "India cenbank sees European proposal for oversight of clearing corp as 'extra jurisdictional', official says",
                "description": "India's central bank continues to be in talks with the European Securities and Markets Authority (ESMA) but views the latter's proposal for supervisory and...",
                "url": "https://sg.finance.yahoo.com/news/india-cenbank-sees-european-proposal-102644616.html",
                "urlToImage": "https://media.zenfs.com/en/reuters.com/42a05d1b65dd8e6fb1c0ebd841a6128b",
                "publishedAt": "2024-11-07T10:26:44Z",
                "content": "MUMBAI (Reuters) - India's central bank continues to be in talks with the European Securities and Markets Authority (ESMA) but views the latter's proposal for supervisory and auditing powers over dom… [+1093 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Asma Khalid",
                "title": "Biden and Xi will meet on Saturday, the 3rd and likely final time during Biden's term",
                "description": "This is likely to be their final meeting before President Biden leaves office. Biden sees it as a chance to reflect on the \"tough relationship\" between the two countries, an official said.",
                "url": "https://www.npr.org/2024/11/13/nx-s1-5189429/biden-xi-meeting-lima",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4690x2638+0+275/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fed%2Fc6%2F111ac0414803a337f5ffdf027b21%2Fgettyimages-1784305652.jpg",
                "publishedAt": "2024-11-13T17:30:00Z",
                "content": "LIMA, Peru President Biden will meet with Chinese President Xi Jinping on Saturday on the sidelines of the APEC summit in Lima, Peru, a senior U.S. administration official told reporters on Wednesday… [+2076 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Genbeta.com"
                },
                "author": "Bárbara Bécares",
                "title": "De Asia a Europa: países con diferentes culturales laborales dejan claro que la productividad y las horas trabajadas no van de la mano",
                "description": "Los empleados indios trabajan muchas horas, pero tienen poca productividad. Así de contundente se muestra un reportaje recién lanzado que analiza la situación en el país asiático, mirando números y datos de la Organización Internacional del Trabajo (OIT). La …",
                "url": "https://www.genbeta.com/a-fondo/asia-a-europa-paises-diferentes-culturales-laborales-dejan-claro-que-productividad-horas-trabajadas-no-van-mano",
                "urlToImage": "https://i.blogs.es/c19aa2/alex-guillaume-2k4du3r1giy-unsplash/840_560.jpeg",
                "publishedAt": "2024-10-23T08:01:44Z",
                "content": "Los empleados indios trabajan muchas horas, pero tienen poca productividad. Así de contundente se muestra un reportaje recién lanzado que analiza la situación en el país asiático, mirando números y d… [+3710 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (William Gallagher)",
                "title": "Test iPhone 17 models are reportedly already being developed in India",
                "description": "Alongside an increase in manufacturing in India, a new report says Apple has moved some iPhone 17 development and testing to the country for the first time.Render of a possible iPhone 17 designApple's devices are famously designed in California, but before th…",
                "url": "https://appleinsider.com/articles/24/10/29/test-iphone-17-models-are-reportedly-already-being-developed-in-india",
                "urlToImage": "https://photos5.appleinsider.com/gallery/61571-127204-000-lede-iPhone-17-xl.jpg",
                "publishedAt": "2024-10-29T13:53:26Z",
                "content": "Alongside an increase in manufacturing in India, a new report says Apple has moved some iPhone 17 development and testing to the country for the first time.\r\nApple's devices are famously designed in … [+1827 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Scott Gilbertson",
                "title": "Best Organic Mattress & Bedding of 2024: Nontoxic, Natural Sleep",
                "description": "To find the best organic mattress, we tested eco-friendly alternatives to conventional mattresses. Try these organic mattresses for a green night’s sleep.",
                "url": "https://www.wired.com/story/best-organic-mattresses-1/",
                "urlToImage": "https://media.wired.com/photos/6725597f23702da9b8e1d98d/191:100/w_1280,c_limit/Birch%20Luxe%20Natural%20Mattress%20Abstract%20Background%20102024%20SOURCE%20Birch.jpg",
                "publishedAt": "2024-11-08T14:27:21Z",
                "content": "My only gripe with the plush version is that it doesn't have straps (the standard does, but I haven't tested that). While it won't slide offit stays in place, thanks to the cotton coverthe corners do… [+7990 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.jp"
                },
                "author": "satomi",
                "title": "予測市場を動かした“トランプくじら”、米大統領選賭博で74億円丸儲け",
                "description": "Screenshot:Polymarketこれ、何かわかります？予測市場「Polymarket」の米大統領選激戦州当確予想チャートです。ご覧のように投票日（11/5）当日朝、ドナルド・トランプ候補の当選確率は62%にも達しています。対するカマラ・ハリス候補は38%。各種世論調査ではどれも五分五分の接戦という話だったので半信半疑で眺めていましたが、蓋を開けてみればトランプの圧勝で、確実に結果を当てた",
                "url": "https://www.gizmodo.jp/2024/11/polymarket-theo.html",
                "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/11/11/20241105Polymarket_USPresidentialElectionSwingStates.png?w=1280&h=630&f=jpg",
                "publishedAt": "2024-11-11T13:00:00Z",
                "content": "Polymarket11/562%38%\r\nKalshi\r\nKalshiNY\r\n@mansourtarek_ via NBC News\r\nDeFi \r\nPolymarket500077\r\nTheo4\r\n4\r\nTimes of India\r\nshy Trump voter effect\r\nBAN\r\nTheo1PolymarketPolymarket\r\nPolymarket10 8400129 10… [+65 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Polly Thompson",
                "title": "Scandals in China and Australia hit Big 4 giant PwC, but global revenues reached a record high",
                "description": "Big Four consulting firm PwC shrugged off reputation-damaging scandals in China and Australia this year to post record revenues and hire 10,000 staff.",
                "url": "https://www.businessinsider.com/pwc-results-scandals-in-china-but-global-revenues-record-high-2024-10",
                "urlToImage": "https://i.insider.com/6720a4e59b3250dbbceaac72?width=1200&format=jpeg",
                "publishedAt": "2024-10-29T11:45:32Z",
                "content": "PwC faced reputation-damaging scandals in Australia and China in 2024.Matthias Balk/picture alliance via Getty Images\r\n<ul><li>After two scandals this year, PwC's business in the Asia-Pacific region … [+2591 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (William Gallagher)",
                "title": "India's iPhone exports jump up to $6 billion in six months",
                "description": "The number of iPhones made in India rose by a third in the six months to the end of September 2024, as Apple's efforts to expand in the country continue.Mumbai, IndiaApple has been working to reduce its reliance on a single country, even as China has urged th…",
                "url": "https://appleinsider.com/articles/24/10/29/indias-iphone-exports-jump-up-to-6-billion-in-six-months",
                "urlToImage": "https://photos5.appleinsider.com/gallery/50489-99331-18914-18533-india-mumbai-xl-xl.jpg",
                "publishedAt": "2024-10-29T10:41:52Z",
                "content": "The number of iPhones made in India rose by a third in the six months to the end of September 2024, as Apple's efforts to expand in the country continue.\r\nApple has been working to reduce its relianc… [+1203 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Joseph Winters, Grist",
                "title": "Amazon Finally Ditches Plastic Air Pillows, but Environmentalists Say It’s Not Enough",
                "description": "Across the globe, Prime packages will now be cushioned by paper.",
                "url": "https://gizmodo.com/amazon-finally-ditches-plastic-air-pillows-but-environmentalists-say-its-not-enough-2000514332",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/amazon-plastic-air-cusions.jpg",
                "publishedAt": "2024-10-21T13:45:21Z",
                "content": "After years ofpressure from environmental advocates, the global retail giant Amazon announced last week that it has eliminated plastic air pillows from its global network of fulfillment centers, as A… [+6996 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Ricardo Aguilar",
                "title": "A los españoles nos gustan las motos calidad-precio: así planea Bajaj Auto conquistar el mercado",
                "description": "Si te hablo de Bajaj, es probable que el nombre no termine de sonarte. Si menciono KTM y Triumph, la fotografía sería distinta. Bajaj Group es uno de los mayores conglomerados multinacionales indios en el mundo del motociclismo, colaborador con las marcas ant…",
                "url": "https://www.xataka.com/movilidad/a-espanoles-nos-gustan-motos-calidad-precio-asi-planea-bajaj-auto-conquistar-mercado",
                "urlToImage": "https://i.blogs.es/af1193/bajaj-dominar-400/840_560.jpeg",
                "publishedAt": "2024-10-29T16:01:16Z",
                "content": "Si te hablo de Bajaj, es probable que el nombre no termine de sonarte. Si menciono KTM y Triumph, la fotografía sería distinta. Bajaj Group es uno de los mayores conglomerados multinacionales indios … [+2392 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Sasha Rogelberg",
                "title": "Walmart employee looked for her daughter for hours before finding her ‘charred remains’ in the store’s walk-in bakery oven",
                "description": "The 19-year-old Walmart employee who likely burned to death in the bakery's walk-in oven has been identified.",
                "url": "https://finance.yahoo.com/news/walmart-employee-looked-her-daughter-153516657.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/PK46TQiV0VePiL9zcWy4tA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTM-/https://media.zenfs.com/en/fortune_175/c5c2c2a0577b290daeaf315ae3c11061",
                "publishedAt": "2024-10-25T15:35:16Z",
                "content": "The 19-year-old Walmart employee who was found dead inside a Canada store bakerys walk-in oven has been identified as Gursimran Kaur, according to a GoFundMe page created by a member of the Maritime … [+2556 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Genbeta.com"
                },
                "author": "Marcos Merino",
                "title": "Con el desastre de la DANA, X se ha llenado de bots indios que desinforman y plagian haciéndose pasar por valencianos",
                "description": "A raíz de la reciente catástrofe de la DANA en España, la red social X se ha convertido en escenario de un extraño fenómeno: cuentas automatizadas, en su mayor parte vinculada a usuarios de la India, están interactuando de manera masiva con contenido sobre el…",
                "url": "https://www.genbeta.com/actualidad/desastre-dana-x-se-ha-llenado-bots-indios-que-desinforman-plagian-haciendose-pasar-valencianos",
                "urlToImage": "https://i.blogs.es/8def0f/india/840_560.jpeg",
                "publishedAt": "2024-11-04T21:20:54Z",
                "content": "A raíz de la reciente catástrofe de la DANA en España, la red social X se ha convertido en escenario de un extraño fenómeno: cuentas automatizadas, en su mayor parte vinculada a usuarios de la India,… [+3284 chars]"
            }
        ]
    }
    /* console.log(data)*/
    bindData(data.articles);
}

function bindData(articles) {

    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = '';

    articles.forEach((article) => {
         if(!article.urlToImage) return; //only the ones with images are displayed
         const cardClone = newsCardTemplate.content.cloneNode(true); //the content/ entire divs in template-news-card is cloned
         fillDataInCard(cardClone,article);
         cardsContainer.appendChild(cardClone); //all the articles will be clonedd
    });

}

function fillDataInCard(cardClone,article) {

    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone: "Asia/Jakarta",
    });

    newsSource.innerHTML = `${article.source.name} • ${date}`

    cardClone.firstElementChild.addEventListener("click",() => {
        window.open(article.url,"_blank");
    });
}

let currentSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    currentSelectedNav?.classList.remove("active"); //the previous active link will be removed
    currentSelectedNav = navItem;
    currentSelectedNav.classList.add("active");

}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    currentSelectedNav?.classList.remove("active"); //when search is didplayed current nav-item active is removed
    currentSelectedNav = nuull;

});