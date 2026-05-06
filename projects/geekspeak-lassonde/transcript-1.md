# Dataweave - Geekspeak Discussion @Last Tuesday

Summary

### Action Items

- [ ]  GeekSpeak to provide copywriting and image assets by retailer
- [ ]  GeekSpeak to provide total SKU list with all 11 details (UPC, title, variant information, images, URLs)
- [ ]  GeekSpeak to provide 50 keywords per banner
- [ ]  GeekSpeak to verify final banner list and confirm replacement for Uber (possibly Real Canadian or another option)
- [ ]  Dan to share list of recommended zip/postal codes for share of search location selection
- [ ]  GeekSpeak to set up OneDrive access for DataWeave team to access source content
- [ ]  GeekSpeak to investigate API connection setup with Plytex for content syndication
- [ ]  DataWeave to check if existing LaSonde audits are available to expedite URL setup
- [ ]  DataWeave to send recap email with all required input items
- [ ]  Teams to coordinate on weekly touchbase meeting schedule

### Team Introductions

**DataWeave Team**   

- Dan Erickson: Partnerships lead, based in Seattle area, 6+ years with company
- Rohitha: CSM lead, taking over from Varun
- Baghi: Primary contact for customer success
- Vaibhav: Product management
- Lily: Delivery manager

**GeekSpeak Team**    

- Trisha Williams: Managing partner and client success leader
- Ali: Program manager, handling dashboard customization and requirements
- Katie: Senior Client Success Manager, supporting internal processes and working on Lactalis account
- Suzanne Hicks: Client Success Manager, leading LaSonde account

### Project Overview

This is the first joint project between DataWeave and GeekSpeak for client LaSonde.   The project involves two main components: content quality audits and share of search tracking across multiple Canadian retailers.  Teams have a shared client relationship through Lactalis, providing familiarity with the DataWeave platform. 

### Content Quality Audit Setup

**Audit Scope and Process**    

- GeekSpeak will provide Excel files with LaSonde SKUs by retailer, including retailer IDs and product information
- Each SKU will be mapped to specific retailers (Metro, Loblaws, Walmart, Save On Foods, Giant Tiger, etc.)
- DataWeave will receive retailer-specific files containing product details: titles in English and French, brand names, descriptions, product bullets, ingredients, and preparation instructions

**Image Requirements**   

- Images will be provided in ranked order (primary, secondary, tertiary, etc.)
- Ranking differs by retailer - some use numbered sequences (1, 2, 3, 4), others use descriptive names (front, angle)
- Primary image must always be in first position; secondary images can vary in order
- Both image files and URLs will be provided where available (e.g., Walmart has both formats)

**Validation Approach**   

- DataWeave's scraping tool will verify that retailer websites display content matching the source of truth
- Minor variations like "Made in Canada" inclusions/exclusions are acceptable
- Character-level mismatches (e.g., "5 minute" vs "15 minute") are considered incorrect despite minimal character differences
- Technical challenges around similarity scoring were discussed but will be handled offline

**Update Frequency and Process**    

- Standard crawl frequency: Monthly for content audits
- GeekSpeak will provide updated content inputs on an as-needed basis between monthly cycles
- Updated reference images and content must be provided to DataWeave for accurate measurement
- Teams initially discussed using Jira for change tracking   , but determined OneDrive with system-based validation eliminates need for manual change logs

**API Integration Options**   

- DataWeave has read-only API integration capability with Salsify for some customers
- GeekSpeak is onboarding Plytex - teams will explore API connection possibilities
- In the interim, OneDrive will serve as the content sharing solution

**Output Format**   

- Scorecard format showing percentage scores (e.g., 7 main images checked, all correct = 100% score)
- Same reporting format previously shared in September/October will be used
- Teams open to optimizations and enhancements to make reports more interactive

### Share of Search Setup

**Banner Coverage**  

- Six retailers for share of search: Walmart Canada, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro, and Maxi
- Uber Eats will be removed from the list since it requires location + retailer selection (covered under other retailers)
- GeekSpeak to confirm replacement banner

**Data Collection**   

- Daily crawl frequency for share of search data
- One location (zip/postal code) per banner initially
- Option to add multiple locations via addendum to agreement
- DataWeave can run initial tests across multiple zip codes to identify optimal coverage for LaSonde SKUs

**Input Requirements**    

- 50 keywords per banner (300 total keywords across 6 banners)
- Keywords will be mapped to relevant SKUs by retailer (e.g., "fruit juice" keyword with all relevant product IDs for each banner)
- Relevancy mapping is retailer-specific - same keyword may have different relevant SKUs per retailer

**Tracking Scope and Methodology**    

- Teams agreed to track top 100 products per keyword search (vs. page-based tracking)
- Top 100 approach allows measurement of movement from page 2 to page 1
- Consistent with current Lactalis implementation

**Output Metrics**     

- Daily ranking data showing product position for each keyword search
- Two key metrics: average ranking and coverage percentage
- Average ranking shows overall position improvement/decline across all SKUs
- Coverage shows percentage of LaSonde SKUs appearing in results
- Both metrics are necessary - coverage alone doesn't show position quality, ranking alone doesn't show breadth
- Visual dashboards will show trends over time for both metrics

### Data Requirements Summary

**From GeekSpeak**   

- SKU lists by retailer with product details
- Hero images and secondary/auxiliary images for each SKU
- Product copywriting by retailer
- 50 keywords per banner (6 banners total)
- Location preferences (zip/postal codes) for each retailer

**From DataWeave**  

- Recommended zip/postal code list based on other client implementations
- Can provide guidance on adding multiple geographic locations

### Validation Process for Content Discrepancies

Teams discussed handling of content variations between source of truth and retailer websites.      DataWeave will mark any discrepancies as "incorrect" initially. GeekSpeak will review flagged items and can overwrite to "correct - slightly modified" for acceptable variations. Once overwritten, DataWeave will maintain that classification unless source data changes.

### Timeline and Implementation

**Standard Setup**  

- Approximately 4 weeks from receiving all inputs for standard implementation
- Includes website setup, crawls, matching, and first outputs
- Timeline may be shorter depending on volumes
- Can be expedited if existing LaSonde audits are available for URL configuration

**Custom Dashboards**   

- Native dashboard setup will occur immediately to avoid data loss
- Custom dashboard development will proceed in parallel over subsequent weeks
- Phased approach: share of search dashboards first, then content quality dashboards
- Teams will have separate detailed sessions to finalize custom dashboard specifications

**Ongoing Collaboration**  

- Weekly touchbase meetings during initial setup phase
- 30-minute standing meetings, adjustable week-to-week as needed
- Cadence can be reduced once project is fully operational

Notes

Transcript

Yeah, that's fine. Hey, Suzanne.

This isUh, There she is.

Everyone. Hello. Everyone.

All right.

What's Geek Speak?

We have everyone. Should we get started? Sure, sounds good.

All right. Well, perfect. Well, thank you everyone for taking the time to connect today. You know, we're very excited to kick off this project with LaSanne and our first project kind of working together here. So really wanted to just use this time to one, introduce the teams, get everyone connected. And then to just kind of re go over the, the requirements. I know we had some discussion a while back about, Trisha and Ali around specific reporting format, but just want to line on some of those, talk about some of the inputs we'll need to get started, and then we can discuss potential timelines and go from there.

Does that sound good in terms of the agenda for today?

Sounds great.

We finally made it, Dan. Thanks for taking us up. Yeah, yeah, no, we're excited to get started. Well, perfect. So we can start on the DataWeave side with just some quick intros, since we have some new faces on both sides here. Dan Erickson and I lead partnerships for DataWeave based out of Seattle area. I've been with the company for over six years. And yeah, I've been working with Trisha and Ollie for a little while now here, trying to get this partnership off the ground.

And yeah, we're very excited that we're We have our first joint customer here now, and we're finally kind of getting started. So, yeah, it's a pleasure to be on the call here with you all. Looking forward to working with you. See you too.

Yeah, hey everyone. I think I met some of you once, like late last year, but I am Rohitha. I am the CSM lead. So Varun has transitioned out of the account. I'll let Bhagy introduce himself.

He's going to take over. Yep. yeah sure uh so my name is bagira don't worry about the pronunciation you can call me bagi uh so so from data wave team we have uh you know apart from me from customer success team uh we have waibo from product management uh lily will be our delivery manager going forward uh rohita has already introduced herself uh apart from that we have uh one more person from from product team as well uh so as to kind of cater to uh the questions that you might have uh in terms of you know customizing the and the data.

So these were some open questions, I would say, in terms of secondary image mapping. Before maybe jumping into this, do we want to just geek speak team? Do you mind just doing a quick round of intros as well? And then we can jump into it.

Sure, happy to. Everyone, I'm excited to kick things off as well. I'm Tricia Williams. I'm the managing partner and client success leader. As Dan mentioned, we've been talking for quite a while now. We do have a shared client outside of this engagement as well. through Lactalis, so we are fairly familiar with the platform, but As I said, we're excited to get things off the ground for LaSonde here. So with that, I will hand it over to Ali.

Hello everyone, I am a program manager at GeekSpeak and One of the people that were brainstorming the idea of how to customize the dashboard reporting for content as well as the search or voice of the customer. And I'll be working to help hopefully provide the inputs to you along with Suzanne for you to report back on the outputs then perhaps. Katie? Thanks. Hi, everyone. My name is Katie. I'm the Senior Client Success Manager here at GeekSpeak.

So currently, I don't have any clients that are being onboarded, but I support from a higher level in terms of internal SOPs and processes. And I also work on DataWeave for one of our collective clients, Lactalis, as well. So I'm supporting from that end, just to make sure that we can all work together to, you know, make sure that we're operating in the most efficient way possible. Suzanne?

I'm Suzanne Hicks and I'm a client success manager at GeekSpeak. Lassonde is actually my client, so I'm leading the charge with that, working with Ali to get everything inputted so that we can start using the platform. Perfect.

Thanks, everyone.

All right.

So sorry, Boggy, will you be our primary contact then?

Yes. Okay, super. All right. So we had a couple of open questions when it comes to secondary image mapping. We would be needing your help to kind of get those particular URLs and so on. through its sequence or not and so on. These report formats that were shared by Ali, we also wanted to clarify whether the same formats are going to be there or are there any changes and so on and so on. The second one was regarding the skews that we would need your help to get those things in place. UPC title, variant information, images, URL, and so on. Primary images and secondary images and so on. Apart from that, we would need 50 keywords per banner.

Also, we wanted to clarify what will be the update frequency, whether it will be weekly, monthly, and so on, and the locations in code.

All right, so how do you wanna do this? Do you want to do it individually one by one or do you wanna first go through all your questions and then we respond to them one by one?

Yeah, one by one, please. So in terms of secondary images,Yeah.

So let's start with quality or do we start with share of fridge? Quality, that's fine. Hi Ali, how are you doing? Doing well, thank you. We met a few months back.

Yes, of course.

So, uh, One part is you provide us all the details, the retailers, queues and all these things. So that's the input part of it. But let's look at the content part first. I think Let's start there. Let's refresh that. So one was you had an aggregate level certain reporting format, right? Yes. And certain way of looking at certain attributes.

Correct. We can take it from there.

All right. Perfect. So let me... This will also add a refresher for us to kind of see that.

Sure. Do you have those emails or do you want me to resend it?

I think we have those. All right. continue sharing then I would need to bring that email up so that everybody sees them or I could try and find it very quickly and bring it up myself. Yeah, yeah. Baggi, let Ali share. Okay, so first thing is, so Give me one second while I try and find... -There you go. All right, so here's my screen. I may have actually let me log out of Teams because you're on-Google, the teens will keep singing.

All right, so Suzanne and Krisha and Katie, please feel free to jump in if I am saying something. That is not correct. So here is content audit. So this is So we, as an input, will give you individualExcuse, by retailers as an example. So you do have a master file, we could give it to you. But then in that case, you would have to run through and figure out everything. So we will not do that. What we'll try and do is give you an Excel file with data for log loss for these skills.

Again, this is At this point in time, you're looking at a completely different client, but it's just the output, what it will look like for the son, right? So the file will look similar to this.

This is McCain, I guess, right?

This is McCain, yeah. So I don't have the son in this format at this point, unfortunately. So I'm just going as an example, right? Very much. This is the file that you will get for Lassan. This will identify to you all the Lassan skills. It will tell you which SKU is meant for which retailer, like here, so you would have You may obviously not have this column or that column, but you will at least have the Lassonde skew.

you will have which retailer it sold on and their IDs. Sure. Right? So this and this you would have for sure. Lassonde is the same as, so Lassonde's QFYI is the same as their G10. It's just that G10 would be 14 Lassonde, the UPID's 12 positions. That's the only difference. When you have this file for you, it'll be very simple to figure out, okay? This particular skew of lasagna is sold on Metro, is sold on Loblaws, on Wallah, on Walmart, on Save On Foods, but not on Giant Tiger.

You got it. Similarly, This SKU is sold on these three, is not sold on Walmart. The reason it's a red, if you recall, was that it just identified that it used to be sold on Walmart, but now has been discontinued. I wanted, we wanted to keep that information, so we left it like that. Okay.

We are going to look at, as we discussed, the red ones. It's just as a placeholder there.

Correct. So once you have this information, you can probably figure out if you were to filter on Metro and just look at the SKUs that are in the automatic font color, you would figure out that these are all the SKUs that are sold on Metro today. and you would know that these are the URLs, you'll find them or I am not sure if we have them, Suzanne, with us for Lassan, AllScares, Metro URLs. But regardless, if we have them, we can provide it.

If not, you will find that product on Metro and then The metro file will also be given as an input to you. So in the Metro file, you would have something that looks similar to this. So in the, actually, sorry. In the Metro file, you would have something that looks similar to, for example, this here, right? So in the Metro file, We would have something that looks similar to... This one, Marshall is the latest.

And this is the information that you will have from a whole set of all the fonts used for Metro, right? So you will have the product name in English. The product name in French. You would have the brand name in English and the brand name in French. You will have the description or sorry, rather the short description, which is in this case, the weights that Metro has. The description for English, the description for French, the product bullets, if of course, Metro doesn't have product bullets, but if it had, Walmart, for example, would have it.

the ingredients, prep, instruction, and all of this stuff. Once you have this information with you, you align your scraping tool to make sure that this is the information that it checks on Metro. So whatever that product is, This one right here 6 9 0 You would find that product on the website. That's the URL. Then you would make sure that whatever the information that's shown on Metro on for the title, is as shown here.

If it varies slightly, it's fine. And that is a conversation that we could have later, but there are certain nuances, for example, the conversations we had in Lake Dallas, if this is, If it says, like if the data is super fry five-minute shoestring fries, but it's dropping the made in Canada or just saying made in Canada, it's probably still correct. But if it comes back and says McCain super fries, 15 minute Super 5, that is wrong, even though that one character is the only issue here, right?

That's the conversation that I think you can have internally with your tech team, but that's the whole process. For each input, you'll have a Metro file, a retailer file for Walmart, a retailer file for 7 Foods. Giant tiger, voila.

So, Ali, are you looking at even anything changes? So basically, if I have to do a similar match and the score has to be 100?

No, yeah, the score has to be 100. But what I do it because again, it's manual. What you could probably do is At this point, I'm not sure how, but what is the change? Character counts won't cut it. It's not a character match of 100 characters versus 90 because you can notice it's just a 5 and a 15. It's just one of that character. So that wouldn't work. So From a tech point, I'm not sure at this point how that would work, but that's the challenge that you'll have to resolve.

So are you saying that, you know, let's say, as you said, right, pi becomes 15, then it's complete, then you call it slightly modified?

No, then I call it incorrect. Then I don't think over here I have anything that's incorrect, but let me see if I have one more.

But then what would be an example of slightly modified then?

Oh, so that is very simple. So for example, they would have said here, do I have any for Walmart? Let me show you Metro as an example. So spicy jumbo crinkle cut super fries. Now that product is probably If I find SuperFries here, SuperFries. Is this SuperFries? I'm not sure which file that I open up. I'll have to go find my super frimaybe it's missing the Made in Canada thing.

I think we might be getting into the weeds here to start, but I think that the initial request is our source of truth. So we can provide all of the copywriting to you in a spreadsheet with retailer identifiers so you know what's going on. what belongs where, and then we also have the image assets as well. I think once we provide that to you, it's a good starting place and then we can field questions, answers back and forth.

Because there are some nuances, which is what Ali is calling out. Okay, so we can provide those to you, the copywriting and the image assets.

by retailers. So we will give that to you. And this is the output. So I know you wanted to discuss the output, but that's the output. If you have further questions on the nuances of that, yes.

That's something we can take it to maybe on the-we can discuss on mail also.

Sure, yeah. Or have a separate call with fewer people, I guess.

This is, So One small thing on Metro, maybe it's still the wheat, but then the nutrition panel is an image, right?

Sorry, what are you referring to? Column, sorry, what? This one? Yeah. Yeah, that's an image. That's an image. So these are all images. And you will notice that ingredients is an image here, There's also an ingredients text form on Metro. So here if I had Metro open, you would see that there's an ingredients column right there, and that should match as well. Sure. You got it. Right? And this information would probably be somewhere in that retailer file that I sent to you here somewhere.

So, whichever that file is, you will notice that there's an ingredients column somewhere over there.

Sorry, that one. Got it. Images would be separate.

So images, the way images would be provided, You would have to maybe sequencing is not that big of a challenge, at least for me again, so that will have our own requirements. So let's just say what Suzanne says, but This is how the images are. You would, you would understand the frequency like it's zero, it's one,True. and three and four and five, right? So you just go through that order. In me, all I care about, if we were ever to do that, is this should be the first image always. And these are OK if you switch it around. So it's not too much of a problem for me.

We'll get these images in the rank order, right? Already have it numbered.

Yeah. Yes, each retailer would be different. So this one is a simpler one where you have them ranked 1, 2, 3, 4. Walmart, you have it ranked? Blah blah, you just figure out, I mean, you remember that this is the first, this is the second, right? They're called the front, the first and the second would be the angle. And you just have to know it once and you can do the mapping yourself. Sure. After all of that is done, we would want something like this. That's the scorecard.

That is a gist of that. What you just saw was pretty... It was more of the meat and potatoes, right? If you want to solve problems. but this is what it actually should be. Like if you just run through So I had seven main images and all of them were correct. So I have 100% score.

Yeah, I think we should just maybe focus on the setup piece first. And then Ali, I know we sent all this information like months ago, maybe we can resend it and take another look. No, I think we have this information. Okay. Yeah. Great. So, Boggy, does that address your first point on your agenda there? Yeah, it does. It does. So my only thing there was, again, we discussed this, I think it was in September, October. So we just wanted to make sure that this is the same thing because, you know, it's been six, six, seven months.

Yeah, sure. Feel free to add optimization or enhancements like you see, okay, you know what, we can make this better or whatever. Maybe get interactive if you want to. This is pretty static at this point.

That's that. Should we look at the input or should we look at the share of search?

All right. So I think I am good with the chronic quality if you have no more questions. Frequency would vary. So your question about frequency would vary completely. It's not monthly. It's not weekly. It would depend. Suzanne, feel free Katie to jump in. I would say it would depend, but if you feel there is a specific need, It happens on seasonality. It could happen based on when a customer feels they want to make a change or they want to make a refresh or they could just come and say, you know what, I want this image updated. with God, yeah, with them.

And so they're not defined things as such about frequency.

So I think within the, just real quick, within the SAW, so we have what kind of the standard package we aligned on is content will be refreshed monthly, shared search is a daily collection. So unless, yeah, there's... additional nuances we need to go through, I think that's kind of what's going to be standard for what's on and kind of what we've planned.

Yeah, so usually what would happen, Dan, is so for example, and that's absolutely correct. So what would happen is let's say today we had, as an example, 100 SKUs and we reported back on the 100 SKUs. And today everything is correct. Right? And then there's a change the second week from when the report was last run. We would make sure that we provide an updated input. Let's say once you had an updated image, we would give that updated image to you for all five and six week alerts. And next time when you check back another two weeks from that point, just make sure that you cross-reference that new image with a new one. Yeah, yeah.

Yeah, so we would just need to make sure we're getting those updated reference images or other content as that's changing so that we can measure against that. But yeah.

How we want it is probably something-sorry, go ahead.

I was just going to say, I think we may have been talking about two different things. So I think that's, Dan, you were referring to our regular cadence of crawls, right? So for content, it's a monthly crawl. For Sheriff's Perch, it's daily. And Ali, you were referring to if there's a change in any of the content. Correct.

And that's a monthly crawl.

So I think what we're saying is if there's a change in between monthly cycles, right? We just wanna make sure we get the updated content from your side or from Lausanne so that we're using that as the reference moving for the next update.

Next month, April. Perfect. So yeah. Now how do we want to do that? So I'm guessingSo then would you want to have a local OneDrive where you update that or would you? Want to have a local folder for you where she updates that? I don't know. So whichever works, I guess, for you better because you already have it all in OneDrive, right? I'm guessing so we can just put it there, Prisha, Suzanne, Katie.

All my contents in OneDrive, yeah.

Yeah, so maybe we can just give you a quick link to that OneDrive and you can just... Grab it from there. Process wise, how would we want to make sure that we reference updates to Yeraviv? Do we flag it? Do we... Highlight it somehow? How did that work?

Yeah, I think If you flag it through mail, that would be fine.

That would be a lot of changes. I feel like, ah, Do we have a reporting platform somewhere? Any like... Do you have any... Jira set-ups update, like Jira changelogs, or changelogs anywhere that are available, or something that people could use because emails would... Nobody would keep... I mean, honestly, I mean, from... I think from Suzanne's perspective, it would be very easy to send in, but it would be hard to keep track of how many emails they're getting.

So, Rohitha, we can onboard them to Jira desk, right? Yeah, yeah.

We do have a Jira desk. Please agree on this side. So, Trisha, Suzanne, Katie. Because it's easier to update a change log rather than having... Identify what the changes are every time you email.

No, no, agreed, yeah. We can get it set up on our Jira server test. Okay. Actually, a quick question. Do you currently have API connections available with Salsify? We can, we can, we are already integrated into Salsify for some certain customers. So we can, we have a read-only access. If they provide us, we can read the, say from the pen system, the content. So what you're giving as source of truth, if it's available on a Salsify, that's also fine for us.

So are you able to pick up any updates via their instance of Salsify?

Yeah, so, see, So let's say we are doing an audit today. So before doing the audit, at that time we can pull out data from Solsify. So we get, let's say on 7th of April, the audit data or the source of truth and the same day we'll crawl the data. So we can then we have the latest one.

Okay, great.

Oh, yeah, but that's in that case. And again, it's a system doing things. So you have, I have to think of it a little differently, but why would you need it if you are, if you are refreshing or checking every. element every time, Suzanne doesn't really need to tell you what change, she just has to make sure it's available in the source file without having to tell you. So here's an example. Let's say today she has this image on screen.

This is the image she has. And that image is called One for Metro. And you said it's perfect. Now, next month, which is May 1st, She said Metro image one is this. You would just look at that and see if that's what's showing up on Metro. So then they'll have to tell you that Metro image won't change from this to this.

See, if you're changing the source of truth, you give us the source of truth, a new source of truth. Yeah, I think that's fine then.

So yeah, so then I don't think we need to do any change-offs or just hold off on that geo thing for now at least, I think, from a process perspective. Because if we just did the source of truth, that's just automatically your change thing. But you're not... I was thinking of it from a manual perspective where it's important to identify the changes to just verify those. But from a system perspective, you're just running through everything anyways.

Okay, so where I was, thanks for that, Ali, where I was going with that in my question around Salcify is that we're actually in the process of also onboarding Kletics. So I'm not sure if you have any, API connections with Plytex for any other clients.

Which one you mentioned? I have not heard this. I have not heard that, but if they have an open API which we can give them access, there should not be a problem. As in they just has to give us API endpoints where we can directly extract data and the permissions, that's all.

Okay, so we'll look into that. In the meantime, we can go with the OneDrive solution.

Do you have that? So the frequency we just discussed, so while the crawl frequency is monthly, which is fine, great. Our updates from our end happens on a as needed basis. Sure. Total skew list with all 11 details. Yes, that can be sent over. I'm guessing there won't be image URLs, I believe. There would maybe-the images themselves. It varies so So even Walmart has images, actual images, but when we syndicate to Walmart, We convert those files into URLs. For Walmart you have actual image files as well as image URLs.

You can use whichever one you want. I'm sure both will be provided to you because Walmart source file, the content source file will have the images as well in them. Good. Banners, that's something that's being worked on. Update frequency from our end if that's needed. From your end, that's it. monthly for content, daily for search, ZIP code one? I don't know what that means.

It's for the location specific.

Then maybe that's something that we need to provide, I guess, Sazan, Kiri, Tushar.

Where it might matter is certain retailers have a specific share of search, especially.

Oh, okay. Yeah.

So I think what we had decided on was selecting a zip code in each region to sort of Reflect. the market. So are we saying it's one single zip code for the sheriff search, Dan?

That's what you tell us on the retailer with zip code or postal code, zip code we should consider for let's say share of search. If the share of search changes by zip code. See, I go on to a retailer and if I'm not selecting a particular location, I'll be looking at share of search from that perspective or let's say I select a location. My location is let's say Ontario and I'm looking at searching something, let's say breakfasting and then the results come in.

So how are we looking at it?

I thought that for the majority of retailers, you have to select a location before you can do a search. I think Voila, you don't have to, but I think the majority of other ones you do. Yeah, so with SW we have one location per banner. Now, Trisha, we did talk about what that looks like if you wanted to add additional locations, which we can totally support. But right now we have one locationPer banner, so it's just like, what's the, is there a specific location you would like us to pick? Do you want us to pick a representative one?

And you know, again, if there's different ones that you have by different banners, then let us know. But if you did want to add multiple locations locations for the shared search, we could certainly do that. We just need to do a quick addendum to the agreement, understand what that looks like in terms of how many locations we're adding, and then we can add that support as well. Okay, can you share a list, Dan, and then we'll take a look at it? A list of zip postal codes.

Yeah, I mean, so we can pick any store location or location. So... The reason I'm asking is I'm guessing that you've already gone through this exercise with other clients, right? So and they usually choose stores that are in like major cities or whatever. So if you have that already figured out, we'll just look at it and verify. Sure. Yeah. I guess the question is, do you want kind of all banners? In the same general area, like the greater Toronto area or whatever the case might be or would you like each individual banners?

Would you want to have coverage across from a banner perspective. Um... All right, let me take another look at the banners that we provided to you. Yeah. Because I can't remember them off the top of my head. There's a few. Okay. Yeah. And like I said, we can certainly share some inputs to what we're doing with other customers. And then if we wanted to look at the multiple geographies, then we could certainly...

provide some guidance there as well. Okay.

What you could also do is maybe for the first time, while we will provide you with good privacy. we could just for the first time set up, run through a parse through multiple zip codes to identify the best coverage for a retailer, at least for the Lausanne set of SKUs. Would that be possible just for a one-time business? It's a volume play, right? Like if you have out of 100 LaSalle Institute, 90 being sold for voila.

And then for voila, we say check Toronto as an example. They use this postal code and you only find 30. But if you were to switch it to Montreal and you find 80 of them, then just use that moving forward for all of them.

Yeah, I think we could dial that in. And if we see any from our first selection that are low counts, switch that up to find another location. I don't know if LaSanne has any inputs in terms of what they're... coverage looks like or their distribution as well. But otherwise, yeah, we can, we we should be able to do an exercise on our side to help identify the proper location. Any concerns there, Rahida, or Vibe off on that? No. Yeah, right.

Okay, cool. Yeah.

Uh... All right, I think we've, We've fleshed out the current quality in quite a lot of detail. Any other questions about it? No, that's all that I had. Good. All right, so share of search now.

Yeah, we can close that for that. Yeah. Okay.

So share of search, i.e. 50 keywords per banner, which means... I don't recall, sorry, as well, how many banners are there, but let's assume... Thanks.

And then-I just sent you a message, Ali.

It's actually on-I don't-did you send it in Google?

There's six of them for Sheriff's Search.

Okay, so six banners. I don't have Team Search. I closed it. So six banners, and that would mean 300 keywords. Most of them would be quite... I'm guessing that will be repeatable. Um... So those would look something at this point the same that we had discussed with me. Kind of unendlessness. Oh, okay. Yeah. So there, wait, so there was a list of skills right there. Walmart, Canada, 133, Loblaw, 137.

Perfect. Um...

Sorry, that's for content. So here's what we have for, yeah.

No, even for Uber. Okay, so... Question on this one. How are we doing Uber? Trisha...Ordan... Uber. Uber eats Bye.

Yeah, so I'm assuming that would be Uber Eats. That was one of the lists on the list that was shared across. I don't know, Tricia, if you have additional insights on that. Right. Yeah, that was on the list. And now thinking about it, because when you go onto Uber, you've got to select your retailer, right? Just like Instagram. Yeah.

So you select your location, then you select your retailer, and then you then the product.

Exactly right. So if you're already doing the reading, or whatever, we have.

So it looks like Uber doesn't need to be on there. I think previously because you actually had to set up the SKUs on Uber itself. But, um...

Yeah, we may have to refine that.

Okay. Yeah, let us know if there's a different... banner that you'd want to swap in or something like that.

So we could do something from love loss. Many of them. Real Canadian or something, or maybe another one. OK. All right, so that's something. All right, so this is fine. Share a search. So let me open Share a Search. So where's my screen?

For Sheriff's Search, we have Walmart, Canada, LaBla, Real Canadian Superstore, No Frills, Hola, Metro, and Maxi.

True. So, share search would look something to this effect here.

Okay, sorry. So here's what the file would look like. I think this is the file I think Vaibhav you have with you. Yeah. The input would look something like... Sorry, hide this somewhere over here. There you go. That's what I think. in my head at this point, what the input would look like. It may vary, we haven't really run this through, but technically here's your skew. I mean, sorry, here's your keyword.

Here are your QIDs by retailer. Yeah. So Let's say if I show you Um, Maybe. Krisha, do we actually want to just go through pretext and show them?

If that's possible. Show them what part?

the Pledex, how we have the SKUs and Pledex and Lassonde SKUs and stuff.

You can because quite honestly, ultimately, if there is that API key, it would be nice to just provide, get that set up.

Yeah, I think they do have the key, I just don't know if they have the, how we would set it up so that they can use it because we would It's multiple effort, right? So, okay, let's look at the free instance. This is a sandbox instance, guys. So just ignore anything that you see here that you feel like it was this. But here is an example that I was thinking of. So this example is what is this? This is a strawberry juice. Right, so that's a juice, a strawberry juice.

Now in your example, what you would get As an example, fruit juice, right? That's your keyword fruit juice. and all of these products are relevant. because they're all fruit juices, right? So the file that you get or the file that will be exported to you from here, would have fruit juice and 173 products. Allahumma salli wa sallim. All the fun ID's. Fruit juice and obviously it'll be separate for fruit juice and 140 products for Walmart.

Fruit juice, 18 products for Costco. So whatever those banners are that we saw in the group, you will have those set of individual retailers by Keywords? and my skills. Is that clear? So something, I think I had that here somewhere. So yeah, something like that, like frozen fries. Available in Walmart and so on and so forth. then the same thing would be for Costco, Costco, Costco, etc. Right? Relevancy would be specific to each retailer. That's the input.

Any questions or any thoughts on-SPEAKER 2: on that particular retailer for that particular keyword, which ideally should be present there or relevant to that. Correct.

Right, so here it is. So here it is. So keyword to skew relevancy would be specific for each retainer. OK, I think, yeah. So this is pretty much it. I said if you want actual URLs as well, but because we're already getting the URLs out, you can just tie a skew to a URL as well, right, based on the content quality thing. All right, so that's the input. For the output, I'm hoping this is the output. So you already have this.

We would like you to keep this for sure. Yeah. and then we would want to change this to ranking like this as well So all this is showing is it's daily like Dan called out. You search for Blackberry juice today on Walmart. Today is being the 7th of April. It's the 50th product and I have this. I mean, I don't think I have this, but I have it for all of these, I promise. But let's say today you serve for Blackberry Juice and your one product that was that's supposed to show up on Walmart was shown up on the 50th position.

That's what this is. In the previous example of the fruit juice you mentioned that there are 173 products, which was. So one is number one, how many pages are we tracking?

Maybe you can go with yeah, that's a great question, but I don't know if fruit juice how you do that. But I do have those similar examples showing up over here because here I had more than. Ah, more than a page product. Right here, we actually created these examples, Because here you go, because I did realize that for frozen fries, we had more than that. So we average it out. So here is the list of skills that we have.

So here, for example, you can see that we have more than what we need. But a product has only, let's say, we only have a total of 22 products per page, right? So how do we capture that? We just capture this and we average it out.

I didn't get the last part. Sorry. Okay.

So obviously if you have, you can maximum have, let's say, 50 products on a page. Correct. Yeah. And if you are supposed to show 100, then you at least check the top 50. If they're all there, you report back on your 50. And I do have that here somewhere. So the actual data is here. It's actually going to come here. So you can see here that first example here, let's say we had a total of 22 products.

How many are these? You got 22. Here you saw that on the first date you searched for it, you had 16 out of the 20 sorry 17 out of the 22 appearing Yeah. You average it out and you say that's your percentage ranking.

Somewhere here, I guess.

That's your 18, I'm guessing? On 1st of January, 1st of January, I got it. So 14 out of 22. You have 14 out of 22 appearing. I don't know why. Oh, sorry. This is 14 out of 22. There you go. Okay. You saw that this was outside your first page. or not a frozen price. So these are not counted. You only count the ones that are on the page. So obviously if you have 100 SKUs, then you only show 50 on a page.

Sorry, I have a question.

How do you normally present this information? Because each retailer has a different number of items that may appear on the first page. And I think what you're doing for Lactalis is that you're looking for the top 100. Is that correct?

Correct. We look at top 100 or depending on the retailer, first two pages, one page, what the customer wants. So let's take that as top 100. How we are reporting it is, let's say, if they take yogurt as a keyword, right? Sure. And in that, how many products does Lactalis have, let's say on Walmart? or the keyword yogurt out of 100 products that came in for that keyword. Let's say 40 of them were that Dallas product.

Let's assume that it's not that high, but let's assume that that is the case. So what we are calling them out is that, yeah, overall your share is 40%. because you have 40 products out of 100 number one and then provide them cuts let's say they only then want to look at out of the 100 okay what is my what is my share in the top 10. So then we can cut that and say that between 1 to 10, you only had one product. Okay.

Yeah, so then it's 10% in the rank 1 to 10. Okay. Right.

So in my mind, it seems like it's a lot simpler to consider the top 100 as opposed to page one, page two, right? Because it's different.

Usually what people do is take only page one, but yeah, that's how usually brands look at it. Page two, very, very rare that people look at, but then we are open to it.

Yeah, agreed. It's just that let's say you have a product that starts off on page two, which is within the top 100. It would be good to be able to measure the move from page two to one as well, right? Sure. Yeah, Roger. Piri, would you agree? Because this is what's happening on Laxalis right now. Yeah, sorry, I agree with that. Okay. So, I mean, if you guys are already set up for that, Ali, I think it makes sense just to look at the top 100 then.

That way it's consistent.

Sure. So yeah, that's just the back end account place. So yeah, make that change, I guess, and you can set the 100. Here is how you would eventually do it, though. This is just one product. I was showing how it moves, right? So... output would be looking like this. And then if you have more than one product, This is how it would look like. And here, This is very important because you need to tie knots to Katie's point. We'll come from here as an example.

Where is that thing I had? Um, Yeah. This is important, right? Like you have whatever that actually, let me show. So that's FF based.

What is seven and one in this list? Can you go back?

What do you mean by seven and one?

V3 is 7, right? So what is 7?

Oh, that's the spot, yeah. So that's why I took a snapshot of the FF because even I would have forgotten, right? So FF is this. Yeah, there you go. FF7 is the seventh position of that product. Mm-hmm, got it. On Walmart, so you can see for my product, when I search for frozen fries, right? So what is my keyword? So go with my keyword. My keyword was frozen fries. Yeah. Only for McCain. And you know that I've given you the SKU list for McCain, right? This is my list of products.

So now what you're doing is you're checking, okay, you search for Walmart frozen fries on a banner called on the location called Bowmanville, right? Let's go with that, right? One, not my product, not my product, not my product, not my product. Not my product, not my product. Seventh position. Sure. 1, 2, 3, 4, 5, 6, 7. So my, but again, how many do you have? You have a hundred, right? I've already told you that I have a total of 15 frozen fries.

Correct. Yeah.

So actually, let me show you. I have 22 frozen fries. There you go. Okay. So you found the first one. Great. On the seventh position. Then you keep going. Eight. Not my product. 9th not my product, 10th not my product, 11th and 12th is my product. The 10 and 12 is my product. Sorry, it is my problem. Then which one was I at? 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12? 13 not my product, 14, 15, 16 my products.

You got it. So you can see that I've just captured all of that here and then you keep going.

Got it. I think one thing you have done here is you have taken that banner of everyday low price also as a product. I'm sorry, repeat that, please. Yeah, would you go back? Two things, right? Scroll up. So this everyday low price is also and Thanksgiving, celebrate Thanksgiving is also considered a product here.

Yeah, that I hopefully you can figure out maybe you shouldn't do that. I don't know about that. So maybe you can drop that. But let me maybe I've This is more of a-think of it as a context.

That's OK. We don't consider that as..

OK, great. But let me just check that. So 1, 2, 3, 4. I have 5, 6, 7. Eight, nine, 10, 11, 12, 14, 15, 16. So we are at 16 here. Then you're 17. So sorry, I have considered this as again 18-19.

I have considered these two 18-19. I do not consider that.

See? So 18, 19. Then I have 20. Then 21 is dropped 2220, 22, 23. What is God's name? Right. And then how do you show the report? Right. How do you show. What the rating is because you have so many products like this was just one. So it's easy to say it's on the 50th position. It's on the 60th position and you can show that movement and you can show the coverage as well. Right. So you can show both coverage and ranking.

But how do you do it if you have multiple products like in the example here? So what you do here is you average it out in my head. So I averaged it out and on January 1st, my average ranking was 18. I just averaged it out. And I had 14 out of total 22 products, which was like average. Right, so those two things here.

Those two things here, 28, 29, 30, you're not considering because these are not frozen fried foods.

Exactly.

You have given us the input which skews to consider. Correct. And on top of that, I'm just trying to understand how do you use average ranking? What does that serve you?

The only reason I had average ranking is because I can still show progress overall if I had average ranking. How would you show me a ranking for all of these skills.

And You should look at the share that 64% what the coverage is that should be trended over time. Yeah. That gives you a better way to look at whether... Not really.

Think about this. Think about this. Think about this. Right. So let's say Take a look at this overall ranking. Look at how I improved from 18th to the 5th position overall. Coverage will definitely show me what my trend is. I am the only one showing up for all frozen fries products. But let's say, just as an example, let me open a new file. And let's say I have all of these spots, correct, that are being tracked.

And I have only one frozen fries queue, for example, only one. And this is spot number one and that's spot number 100. My coverage is always 100 percent. What's my ranking? My ranking is 100 out of 100. That's terrible. How can I actually just, sorry. How can I actually just rely Vibo on the coverage without figuring out where my ranking is because I need to see this progress move here to there.

No, I got your point. I think both has to be looked at because if you just look at the average ranking also, so if you only get one product and that one product is on the second rank, your average comes to two.

Exactly, exactly. You're absolutely right. Which is why I have both here, right? Average ranking and coverage. You're welcome. Yeah. And then you can see over time, my average has improved And my coverage has also, so that's just the backend, ignore that, but that's my coverage has also improved. And this is reflected in the chart here. So that's the ranking where you can see the ranking keeps going up and up and then it went really bad.

I mean, really good actually. And then it's debilled out. And then my coverage has also gone from, decent, decent, decent to terrible, which is on 1st of September. So I went here to only having Do products show up for some weird reason? This is just obviously all faking up. Yeah, exactly. And then all my 100, all the top 100 products will just be me. Right? So, boom.

The trend will be a daily one, not a monthly one like Shonin. Oh yeah, true.

That is a daily one.

Got it, got it.

So you have this as well with you along with these snapshots in case you wanted to take a look at it. Okay.

So do you have everything? Like we will need to provide you with the images and the copy, obviously.

Yeah, the products and the copies and the keywords. Okay.

Is that all you need then to get started?

The retailers, the products, so obviously retailers is there, but the products on the retailers, what was shown earlier, right? The products, the images for each, the hero image and the secondary or the auxiliary images. and somewhere we can agree on the location part for each retailer.

Okay, sounds good. Maybe if we can get a recap email with all those items and then we'll follow up with you. In terms of timing, Obviously you're going to need us to send you some items, but once you have all of that, how long does it take you to get things up and running typically?

Leave that. Okay. Typically, about four weeks-ish, Drisha. But depending on the volumes, it would be low as well. Once we have all the inputs, we can get it kick-started internally and our delivery manager, Lilly and Bhagy will share the plan with you. Okay.

Yeah, and I don't know if that factors into, Rohit, I know since there's some customization in terms of the dashboards.

Yeah, so this is for the standard implementation, setting up websites, scrolls, matching, and then the first outputs. Any customization, we plan and share the data.

the talk with you, the plan to talk with you. Okay.

Do we have any Lausanne audits already in place so we can expedite the URL thing where they don't have to figure out the URLs?

The only thing we need to check if everything is already set up is if the configuration still holds as an AVI, is there any change in the website?

I think all he was saying is they've done any audits on their side so they can just share us the actual--URL, obviously.

Direct URLs, okay.

Limit basements for--You might be in the same. Yes.

Right, right. Yeah, then that sort of cut short maybe a couple of days to a week. But we can work with the-OK, exactly.

All right, from a setup perspective, so the standard would set up immediately, right? We said four weeks out that timeframe. The custom report, would you let us know after? Because that's essentially, In my head how? at least I would like to review it or view the data. It's easier to comprehend, right? You know, this is the specific. So obviously a dashboard somewhere, But behind the scenes, all of that Excel file that I showed you of each element.

So if I click on Walmart details, I see that entire grid open up for me. Like, you're going to walk-Metro detail, they open up that grid.

ALI PASWAL: What we do is, one is, yes, once we get the files and all, we anyways have to set up the native one. And the main data, the source of the data will be there. So we'll set that up. And towards the next couple of weeks, right, we'll further kind of give you that visibility on a one by one, how we can set up the custom dashboards. Let's say start from the share of search part, give you that complete thing and then look at the content part and give you that.

So that while parallelly we are working on the native being up, so that you don't lose data. Wow. Any on the custom part can happen, but then we'll not lose the data.

Perfect. And also to answer your-again, obviously, if you need to, feel free to set up a separate call. But for correct, slightly modified, those things that you were questioning? Yeah. It's a better idea if you don't take it at your end, leave it at our end. So what we should probably do is you see any disconnect, you market as incorrect 100%. You just market as incorrect. We will obviously review that, right? Because that's our thing. And as soon as we review it and we say, oh, this is actually a...

A modification that is allowed, we will overwrite that incorrect. And as soon as we overwrite it, it becomes a correct slightly modified. And then from that point on, you do not change that unless Something has changed in the source.

So what you're saying is then we mark it incorrect, then you have a question to overwrite it to slightly incorrect or correct?

No, there's no slightly incorrect. Incorrect will always be slightly modified. So correct, slightly modified. So if we mark that, then you don't change it unless Something has changed in the source data, right? So we can have the conversation if you want to ask.

Let's have the discussion. I think we are good, Dan. Thank you.

Perfect. And then just in terms, I know we're at time for a recurring cadence. Baggi, do we want to do a weekly touch base during these initial stages or what's the preferred cadence here for this meeting just to make sure we're making progress and we're staying in touch with the teams? Yeah, I think weekly would be the good idea. So we can maybe send some times after that would work for a regular touch base. I think moving forward could probably just be a half hour and then we can always adjust on a week to week basis as needed, but it's good to have some standing time on the calendar just to kind of work through and provide updates. So yeah, we can share some times that work on our side of them. Yeah. If you guys want to coordinate on your end and just let us know it works.

Sounds good. Yeah. And maybe once we get into it, we can reduce the cadence. Yeah. Yeah, for sure. I think just, and again, if we don't need a touch base every week, that's fine, but just, you know, having something on the calendar is helpful in case there are updates.
		

Summary

### Action Items

- [ ]  Client to provide image assets organized by retailer (Walmart, Loblaws)
- [ ]  Client to provide copywriting content organized by retailer
- [ ]  Client to provide keyword list broken out by SKU and banner, including both client SKU ID and retailer SKU ID
- [ ]  Client to provide ingredients and NFT (Nutrition Facts Table) information
- [ ]  Client to decide on and communicate replacement banner for share of search tracking (replacing Uber Eats)
- [ ]  Baggy to review keyword structure spreadsheet and provide feedback on format
- [ ]  Baggy to confirm tomorrow whether team can work with image URLs instead of requiring image files
- [ ]  Vendor to provide sample image URLs for reference
- [ ]  Vendor to provide blank template showing attributes to track per retailer
- [ ]  Vendor to investigate pricing for tracking top 100 search results vs. page 1 only
- [ ]  Vendor to implement override functionality for manual status corrections
- [ ]  Vendor to provide backend data access in addition to high-level scorecard reports
- [ ]  Vendor to clarify scorecard calculation methodology (discrepancies noted in column calculations)

### Image Assets and File Organization

- New product images have not yet been provided to retailers like Walmart or Loblaws
- Team discussed organizing image assets by retailer in OneDrive folders
- Current image links are just URLs not yet sorted by retailer
- Discussion about whether vendor can work directly with image URLs vs. needing files downloaded
- Loblaws typically has 6-7 images per product; number may vary by retailer
- Images include main image plus additional images (product shots, lifestyle images, infographic images)
- Team agreed to simplify image tracking as "main image" + "additional images" rather than categorizing each type
- Client is flexible on image order as long as primary image is correct, but vendor needs to know if exact order is required

### Keywords for SKU Tracking

- Client has prepared keyword list for 140+ SKUs (primarily juice products)
- Each SKU has 5-7 keywords assigned
- Significant keyword overlap exists across SKUs since portfolio consists mainly of juices
- Keywords were deliberately selected to apply only to relevant SKUs (e.g., lactose-free keywords only for lactose-free products)
- Current format shows one SKU per row with associated keywords
- Need to add retailer SKU ID column in addition to client SKU ID
- Contract specifies 50 keywords per banner
- Client will refine keyword list after receiving vendor feedback on structure

### Product Attributes to Track by Retailer

- **Walmart tracking includes:** Product title, description, feature bullets, preparation instructions, ingredients, images (up to 9), reviews
- **Loblaws tracking includes:** Similar attributes but ingredients are handled differently (provided via GS1, not by Eatspeak)
- Ingredients and NFT are audited but content responsibility lies with GS1 feed, not the vendor
- Vendor tracks whether NFT/ingredients are correct, incorrect, or not available
- Additional potential attributes: Storage instructions, lifestyle images
- Client will provide blank template with headers for each retailer's required attributes

### SKU Identification and Mapping

- Need both client SKU ID (Lassonde/Oasis ID) and retailer SKU ID for accurate tracking
- Vendor receives data from retailers using retailer SKU IDs, not client IDs
- UPC codes alone are insufficient; vendor needs actual vendor IDs from each retailer
- Not all client SKUs are available at all retailers (e.g., only 5 out of some set available on Walmart)
- Format can include retailer columns with "yes" indicators for which SKUs are sold where

### Share of Search Tracking

- Currently scoped for page 1 results only (typically 20-40 products per page)
- Client asked about tracking top 100 results (similar to Lactalis account)
- Tracking top 100 would require additional crawls and likely minor commercial impact
- Client decided to stick with page 1 tracking for now
- Standard output format was reviewed and approved
- Uber Eats was originally included for content tracking, not share of search
- Client will identify another banner to add for share of search tracking

### Reporting and Scorecard Functionality

- Scorecard calculates percentage of correct attributes across tracked SKUs
- Backend data is critical for identifying specific issues (e.g., which image needs fixing)
- Calculation methodology needs clarification due to some discrepancies in formulas
- Need override functionality to manually mark items as correct when client fixes issues on their end
- Once overridden, status should persist in future reports until changed again
- Status categories include: Correct, Incorrect, Not Available, Modified
- Report will be day-wise tracking

### Data Feeds and Image URLs

- Walmart and Loblaws product data will be provided as URL files
- Vendor will provide sample URL format for team review
- Discussion about whether vendor can reference image URLs directly vs. needing downloaded files
- Vendor's model typically uses actual images for comparison but will confirm if URLs work

### Next Steps and Timeline

- Vendor noted that calculations are straightforward but product list mapping and crawling setup will take time
- Custom views/reports and override functionality need implementation
- Both high-level scorecard and detailed backend data access are needed

Notes

**Something to confirm:** is the end user the Geekspeak team who would want to use over it functionality whenever they see something which is marked as incorrect and they would feel it is correct? This would change the category from incorrect to correct and slightly modified only in this scenario. In all other scenarios, which would not be there, there would probably be something which is marked as correct and they would want to mark it as incorrect. While doing this it would not be incorrect, slightly modified, or something like that.

Transcript

-Sorry, I didn't hear that. No, that shouldn't be a problem. I wonder if it should work.

Okay, so I think that's easy. We can send that today, right? We have those panels.

Yeah. OK. Just one thought. And again, we can give it separately. But would you want one file for all long loss? I mean, we have a broken down.. Like we have the beverages, sorry, we have the, I'm guessing Kiju love lots would be separate than the Oasis love lots? Sorry, what do you mean? In the same folder, you mean? Yeah, but in separate folders. I don't have a retailer for your set of referral details yet.

Well, so as I said, they're not named according to the details of the project. Currently. Thanks. Because if they don't know which image to show up on the street, they'll have a problem. Okay. I don't think we have that.

No, because that's been for this entire process ofOkay.

So that's something to hear. Good job.

Not with the religious, but with all the religious.

So when we subliminal, we are doing something.

For log logs? For log logs, for example. We could go to spreadsheet.

So the spreadsheet has all this stuff, right? And that spreadsheet is gonna fold over log logs. -Let me, give me one second. Sure. have, for example, here, the song, right? Thank you. Thank you. So in voice, for example, for Allen's, let's do it with Allen's, we have this folder called pdf files. In here we have LCL. What's in here? Okay, so there's no content for LCL, but there are images in here.

I don't know how much is here. So this is what they need essentially, right? So we don't have this at all for anything. I thought we were doing this whole product.

That would have been old stuff anyway. This is none of the new stuff has been done. So that's actually like this can't be provided to them today.

OK, so that's my question. When you're sending over a newsletter-so let's say you got a newsletter, for example, and you send it to China Tigers.

All I have is to use it here, just right now.

You'll have-You have never sent any updated images to Walmart or Love Nausea?

This is what I'm currently working on. Oh, okay.

So it's actually working. So we don't have like...

So I mean, I guess even though they're cleaning, If you haven't sent it to Loglog, then they don't really have updated images on Loglog either. So whatever they do have on right now on the phone for the phone will be those.

Can you hear me? So, long story short, we'll have to get back to you with that source of truth. And it sounds like you'd be okay to pick those up from a OneDrive folder, is that right? Correct. Yeah, that should be fine. Okay, perfect.

Sorry, just a question then.

For Loblaws and Walmart, the images are just links right now. So I've basically been putting in the primary, the secondary, they haven't been sorted according to a lot of laws. Okay, that's how it's gonna go. So is she going to have to put those into my buzz folders at one point?

If you give you an image URL, can you not just reference that image URL with what's the available product and just compare the two images? Usually we have the image to put it into the model to compare but I can come back. Give me a day or two. Because as long as you have the URL of the image, you have the image with you. You just reference that. You'll get it on the website, right? Give us a day to come from that.

But then usually we take the image because the model uses the image. to compare with something. But within any, give me one day's time and I'll come back tomorrow. Sure, thank you.

Okay. Boggy, the other thing that you need is the list of keywords, correct? Yeah. So we have put together a list of keywords for each individual skew. So the keywords that we think apply to individual skews, right? and we've got over 140 SKUs. There is some overlap in the actual keywords because a lot of this client's portfolio consists of juices, it's all juices. So there are some seed keywords that would apply to pretty much all the SKUs.

So we've created a keyword list. specific to each SKU and it's got a list of like five to seven, I think right now. What I'd like to do is just send it to you based on how we've structured it just to get your feedback. and you let us know your thoughts on how we've structured it and if you have any recommendations on how we can find tools, keywords.

Can you share that on screen? I don't know if you have that handy. I know I have the old one.

I have the one that Suzanne shared with me. Because rather than put any more time into it, I'd like to get their feedback. Okay. First,-Forward, let's see if I can share with you. -Awesome.

While it's coming up... You know, you mentioned-Why the record? Sorry.

Can you say that again?

Yeah, so you mentioned you were going to review Uber Eats SKUs, right? So you're going to replace that particular source with something else or? Uber?

Yeah. Yes. We don't necessarily have another retailer to check. Okay. but wondering if we could potentially add Another banner for the sheriff's search. to make use of that. funding there, Dan, I don't know if you have any thoughts on that.

Yeah, that should work.

Let me just double check. Was Uber for share of search? Is that what we had earmarked for? Or was that content? Anybody? Yeah, sorry.

The number was content.

Okay, that's right.

Okay. I'm getting a little echo on my side, so apologies. No, I think that should be fine. So yeah, if there's another banner that we wanna swap in from a Sheriff search standpoint, just... pass that along and we can make that swap. Okay.

Here's the problem with the English language screen.

Let me know if you can see it please.

Can you see my screen? Okay. Yes, we can. Yeah. So that's the file, it identifies a skew and identifies which keywords are relevant for that skew.

For each skew, so as you can see, there is duplication because they're very similar skews. Yeah. I'm guessing that this needs to be refined, but before we take another pass at it, Baggy, I'm hoping you can just take a look and then give us any feedback or any recommendations. One of the things that the primary reason we structured it this way was because through our other experience with life talents, we found that There were certain skews where specific keywords didn't apply to it. So we were trying to be more deliberate here in selecting keywords that actually apply to specific series.

Right? So if a product in the Laxalis world was lactose-free or not lactose free, we weren't necessarily trying to have it present as a lactose free. Search result. Does that make sense? Sure.

You're welcome.

One thing maybe last time when we did this, I think for each keyword there were skews, but there were skew IDs on the retailer as well as the, let's say the brand's skew ID.

If I'm not wrong, let's say on Walmart, what was the UPC and what is the McCain ID? At least last time. Ali, if you remember the sheet which had the McCain data So that's the format you'll get it in, but this is what we have been.

Yeah, no, that's okay. That's okay.

But the, the, the difference only is that there were two SKU IDs. Correct. Yeah, so here is just one that that's what I was trying to ask because once we get data from let's say Walmart, we will not get the SKU ID ofOkay. Yeah, you have the regular ID next to it.

That's what I'm asking, your regular ID. Exactly.

So this is how it is. And then you obviously the retail writing will be present on site. So we actually that skewed then that we had to give it this, right? So we can start this program with it. We were the site skews. You know the same thing? But right now, for example, here you can have each one with two skews. So is this the preferred format, Baggy? Both is fine. But let's say row number two and three are different SKUs or same SKUs? They're different SKUs, right? Thank you.

So my idea was, if you go back Ali, Oh. to the one there. Is it, is it, it's Nissan's QID, but the retailer's QID is missing there. That's what my point was. Correct. Yeah. So I was asking, the format doesn't matter as long as you're able to give both. The retailer--Because he needs to know, right? So the logic that we went with is--Based on--Yesterday's use, but out of those down, only five are present on Walmart, meaning.

Sure. So it's not the UPC he needs, he needs the actual vendor ID.

Yeah, right. For all my computer. for the ability to be a body. We could add it here, but the thing is this way, You can just add in a column here and say, blah, blah, blah, blah, blah. Yeah. But you're not going to steal it. Overall.

Thank you. Yeah, it still needs to be likeAnd so based on the contract, can you, sorry, based on the contract then it's a total of 50, B words. In food. for all of Lausanne. Is that correct? Yeah.

VASANTH BALAKRISHNAN: Can you take that? Yeah, 50 per banner basically. Per banner, yeah.

Per banner, okay. Good.

All right, super. So we have work to do then to get you the copywriting and the image assets organized by a retailer. And then we also have to get you the keywords broken out by SKU and by BANF. Sure. Good. Is there anything else that you need from us, Diane?

I need-can I share my screen? Sean? Yeah. Thank you. Hey.

So This part of the equation, let's say... Can you see my screen? Yep. It's loading. Yes. Yeah. So this part of the thing, will it change by a year? So let's say it's product title is fine. Description is fine. Short description or long description, whatever is there. Oh. Is this, this is the main path, this is the additional images. This is the ingredients if it's present on Walmart. Walmart has something called ingredients, right? Correct.

Yeah. True. Are these going to be the same for a Lassonde as well? You're guessing because that's retailer dependent. Unless there may be an additional thing, I don't know about the sun, but By and large, it would be very similar. There may be an additional thing on Laskan you think So this is Walmart. Cancel that. I think this is the only thing you send again, right? Maybe you'll send in... Storage instructions maybe that's another commonAgain, this is basically Walmart. Forget this Walmart. So Walmart is another product I own.

Yeah. Another short description. Can you zoom in a little bit? It has a product social, it has feature bullets, it has preparation instructions that you can be shown. It has ingredients, it has so many images, and then it has, again,Left on, we have more images, Michael. I have only six or seven. And now we do our apps. One, two, three, four, five, six, seven, eight. That's why we have nine heads, right?

So then you can add an image, but that's pretty much it. And then the comments are... if possible. But I think that's primarily it for now. What else do you think we did well? I mean, all the hatchlings and everything, but--You said we got hatchlings? No. That's on us. We don't send it out to the students. No.

That's during the onboarding. Or if you want to update them, maybe something. Yeah, but that's not what... No, no, no. Are they measuring it for women? It's just when you just leave the file, all those columns, they're not filled that much.

But we don't agree, and that's, and that increases the score as well. they cannot be asked for that information. For example, packaging type of accounts, right? So the account that we would have would be the shortest version. So there's separate attributes over there to count, and that doesn't show up on the worm page. But for the purpose of this, we thought it would be fun. Now, similarly, if you go to log loss as an example. So if you take a look at how many rows behind here, we have columns.

We have s to so many. Now, log loss-You would notice I am probably missing something from here. What am I missing? I'm missing ingredients.

It's not submitted by James. It says MSP and degree.

Correct. So that's the column, that's the score party. So that's the column, the road map and road map two. NFT shows up on Walmart, on Loblox, what we do also then. So, ingredients is missing from here. See, and ingredients is also there not separated by GIFT. So we track only to show McCain or Lassonde or that it's present, if it's good, not good, they can fix it. We are not responsible for it. So we report that one.

I think that's a good question. So in the case of Loblaw, they're getting a feed from GS1, for their NFT and ingredients. Everything else is provided by Eatspeak. So what Ali is calling out is that when we're auditing manually, we are just checking to make sure that the appropriate information is there for NFT and ingredients, but we're not actually responsible for that content. So are you just checking? Or are you actually?

So if it's incorrect, not available, or it's incorrect? Incorrect means it's there and just not correct. If it's not there, it'll be incorrect, not available.

So where's your source for that?

Referencing other folks. Doesn't matter. I have all these people with me anyways. I just don't submit it. So that's how we do it. So basically that's Q2.0 and that's where from that 5.0.1.9, it's a price that it'll shoot thing for. If you go to the left, it's probably a red bag. Or Superfly, I'm guessing. That's first row number two. Yeah, the red line. So I have that skew, the KNID with me. I already have the ingredients for it. I have the NFT for it. I may as well just.

Okay, so then we need to provide that.

Correct, that'll be good. But again, because you're providing the file that we do have, They can just go for the. Survival and bugging. From your perspective, while you do need to know which column A customer ID is sold on which distributor or retailer on there. You don't really need the retailer ID as such because what we could reference is column A. Now in column B, Think of Columbia as Walmart. Right, instead of making everything over and call them C log loss.

And then I just put a yes, yes, yes, wherever applicable. You can reference that as well. This is the MacKinnon, Lassonde ID. Use this ID to check everything. ALI RANGANATHAN: Ali, what I was trying to-before we get started, to arrive at-So we just need to verify that, you know, let's say So from that perspective, this information is correct in my opinion. Is there anything else that you guys can say about this?

You said something wrong. I felt like telling a movie.

I think it was just that they had posted that NFT on their phone.

So yeah, this is primarily it. Again, images may change. LaShawn may have one. LASON DELRAHIM: Six. Lason, you have seven. Just add a seven column there, I guess. Yeah, so---for every retailer tablet you see. Yeah, I think what I was trying to, yeah, it could be seven, it could be nine, it could be 10. That's okay. That shouldn't worry us. My only thing is just to be clear on at a retailer level, what all do we need to track?

Let's say your product, product description, bullets. and so it needs to be tracked, not to be tracked. So if we are clear, right, we can set it up in that way. That was my only thing. Whether tomorrow the images change from seven to 10, that's okay. I'll leave it to you. Yeah, also the lifestyle limits, let's say.

It's a separate one, right? So if I go to the... Thank you. Speak. Nice.

So this lifestyle image comes in if I may ask.

Right. So why both? Nice. Okay, context. Context is important. This is way back in the past. -I had a lifestyle image that had actual people on it, right? Like they had people in the image and they were eating or having a product, a weekend product in the background. And they did a one day show. We again had wanted it to be removed. Okay? Got it. The problem is that we actually had them still. So then that is why because I'm doing it manually, I had the flexibility to mark them up as incorrect.

And when they actually did not show up, I marked them off as correct and not available because it indeed was meant to be not available.

Ali what I was trying to refer to is will let's say on the song, will we have a lifestyle image kind of thing or let me keep it very simple. As a blank, I don't reach retail now. Then we can... then we can start analyzing them. That should be the case. What we need for the song for each retailer, I don't need this right now if it's not there, but the headers at least. Correct.

The headers are the same and you can even simplify it further. You can add additional image, additional image, additional image, except the main. So you don't have to get into primary or sorry, left, right, alternate, infographic, like that? You can just have main image and you can have additional images. What for all the retailers? For all retailers. And your email, the file that we give, only URL that we give, which you will confirm tomorrow.

Yeah. Beef? We give you for a product 10 images. You will verify that the first one is the first one only. In my case, I am very, again, so everybody can have their own requirement. So then you can come and say, I want this exactly because in my case, I am flexible as long as it's personally the right one. And sometimes the second one, I don't care about the order of the remaining one and we can also quite flexible.

Bye. In this instance, if let's say, LaSanne or Suzanne comes and says, I want it to be the exact photo. then it will be a challenge for you because you need to make sure that you check each image accordingly. Otherwise, the placements can move around. Makes sense, right?

Yeah. Ali, can I take a minute on that? So if they want the order and they have, they will also provide us the order, then we can do it.

We won't provide you the order.

Actually, it's actually easier for us to, if the order is maintained.

Yeah, it is actually easier for you, but don't mark it off as incorrect if the order is not maintained and if we are okay with it. The order being that it will be harder for you, but you're okay with that. Sure. Okay. Yeah, so-I'm pretty sure I'm sure there's nothing extra that has been submitted. We'll still run it very quickly if you want to internally. But by and large, this is the exact file that you can.

Sure. That should be fine. So one thing is, yeah, just provide us whatever, if possible, just a blank sheet. And one more thing, what you're telling me as URLs, right, or images, just give me a couple of samples for me to take to my team. Sure. Yeah.

Is that a lot like you want to--That page you had at La Brasse, please. If you right click on that URL and just open it as it is there, that's the URL. Okay. Got it. So you can do this URL if you wanted to, right?

This is Loblaw's URL, how will we get it? That's what I was trying to ask. Is there a digital asset placed somewhere that URL will be there? Oh, we live in shock.

Sure, we can give you that. It's a weapon.

-Yeah, we used to be provided those from teachers.

We'll have you around. Yeah, but we won't have long runs. You're watching We will send you a file. I'll send you two files. I'll tell you a medium sound. For Walmart and for Loblaws, those two are URL specific. If you want, I can show you the data as well that you can expect for everything. How much time do you need? Do we have anything else to discuss? I can show it to you at the end.

One sec. Okay. While I'm sharing my screen. On the share of search part, one is, let's say what we do on our native part and then we are going to build. This is what is critical for you, right? The most critical one. Or let me call this... Same thing. These are same thing. This is..

Yeah, just to reference the snapshot. That's pretty much it.

This view for a retailer on a keyword is what is critical to you, right? Correct. Yes. That's okay. And then, and then other things, anyways, the other things that are actually here, it's the same, right? This is FF, this is something else. This isWho's?

So this is your report. The way I'm looking at this, Vaibhav, is your report is at the top right there. That's the existing report as of today. No, just the first part. Row number one, that's one way, row one to eight is your reporting. Yes, correct. Okay, this is how it's currently tracked at database.

Yeah, no, that's okay. But you are you are more you are keen to have the data in this format, right? Actually, I would keep to have it in this format, but this is the backend for that only technically, if you think about it. I would go to row number 10 all the way down. So row number 10 to 12.

I would go to row number 10 all the way down. So row number 10 to 12, no, 16.

Got it. This is a standard one. I'm sorry? This is our standard output. That should be fine. Actually, I have a question.

I think we're only looking at page one, correct? that for example in the lactalis case and I know it's two different accounts obviously They are examining up to the 100 SKUs, top 100 SKUs. Um Is that additional effort? for us to track up to 100 or Is it just as easy? to do page one versus top 100.

So I think it would be additional effort somewhat depending on the retailer, but I think in most cases that would require additional crawls. So instead of, you know, most retailers will have 20 to 40 again, it will depend, but until you have to go to the second or third page to get the rest of the results.

So I think when we had initially scoped out as kind of the standard package, it was just focused on page one.

If we do want to look at just taking it to the top 100, I could take a look. There might be some minor commercial impact. I don't think it would be huge. But again, I think we just need to kind of look at how the site behavior for the different retail sites. But if that's an area of interest, I can definitely take a look and get back to you with that.

Yeah, I just thought I'd ask. Yeah. You can stick to page one. That's fine. But I thought if it's the same pricing.

Yeah. So, and that's where like some sites have kind of that endless scroll, but I think most, especially when you're on the website versus like the, you know, an app version, uh, it's it would require

I think. I think the big is your existing report. I feel like it, but I'm not 100% sure that people look into it all yet.

Sorry.

This report is clear for us. Now it will be day wise, right? It is fine. But this just maybe get that we can we can work on this.

If you don't mind, can you click on column K and just show me the cells in column K and the values of them. So that's... Okay. That's this minus this and come down to the k-couples. Yeah, go over this here please. So it's column j that is making the difference here, right? So it's j ten minus this, so it's eight, okay. And you go to column j, switch over. I'll let you know again, but I just want to be here very quickly.

It's 14 out of 21, go up. to row number five. 14 out of 21 versus 17 out of 21. I think it's something to do with relevancy, but I will confirm because you can see that there's, what is being considered are 17 organic products, but there should only have been 14 or something. So I'll get back to you. Huh?

Yeah, I think. I think we have goodWe will be back. So action items are, you know, you're going to provide us the keywords. AndBy retailer? Yeah, by retailer and the skew ID and the retailer ID. I'm not sure about the products, but then one blank if possible this part of just for my confirmation that you know these are the attributes that when I say attributes these callers AndReally? Anyways, let's take it from there.

Also, once you get this row number one, Is drip helping you tie each column to the scorecard? The other one, the green map, the one you saw in the green map, right? This one, right? So in this case, you would notice that I have a main. the call of unity. So main is main. That's row number one. You can make it out very easily. That's row number column K, correct? Yeah. And then for the copy, which is just one column there, so if you take a look at copy description, row number, actually you know what, let's go and order additional images. Yeah.

Go to the next tab. These are all we want you to count. One, two, three, four, four, five images, right? That's the ratio?

Yeah. So how do we, how is this 96% calculated that you know, all, Yeah, so there are seven products in Redbass.

In Redux?

Yeah. 51413. Yeah, 5 into 7 is 35. And out of 35, how many are correct?

Correct. So then you will see that there are probably, you actually have the number right there. So if you click on that cell, you will see it. So 24 out of 25 are correct, actually. Sure. So five plus one is the main image, right? So one is the main image, so you remove that from your additional images.

There were five additional images.

There are five, but I think we're not coming to the not available. I may drop that off. I'll check back on this as well. Yeah. Wait, is this, which one are you checking? Can you go check which one are you checking, original file? Sorry, the email. Yeah. So you're checking the Walmart column and you're looking at the Loblaws tab. So go to the Walmart.

No problem. We look at Loblaws here. So it's 21.

Anyone want to take a look at Laos?

So 21 means 4 will not... Adam.

Yeah, you just check all the remarks here. Yeah. Yeah. Yes.

Yeah, so I'm just gonna... Any eggs? Ready, 1, 2, 2 are known.

2026? Yeah. And then, yeah, OK, so I probably have made the main image file. I'll send you the DS one right now. That's basically it. So you just have to match the right one to the right one.

Yeah, got it. Very much. Full track at 8. Actually, hold on.

Okay, I'll get back to you. And then the NFC ingredients of the NFC ingredients, so that's two columns. Yeah.

So let's say on the on lovelace, there are 14. The seven products. Seven products. Both of these are taken in the. Correct. Yeah.

So half are correct, half are incorrect.

So, uh, Sorry, this is LobLog, right? I'm just verifying, let's say this is the... and this is the ingredients Okay. Sorry. You got it? Yes. Yeah, I think we're good.

I'm just sitting here. And yeah, the statuses themselves, are we clear on the statuses themselves? I did send an explanation way back. Yeah, from our perspective, correct. Modified is not your problem, right? We will do it, right? So if we see something you'll log it once and then it'll be forever the same. Right? Like, if you don't mind, so this is us doing it. So if there's a product URL, if you open up that Roblox page again, please.

In the title here, let's say we are saying the game should be in Friday. But let's say the product we want to begin fries, she's ready. And we can't fix it. No. He wants you to have the interact. So then we will look at it and we need to ask what we're doing. And that was actually correct. And we'll fix it. And once weThat's correct. A.W. will record a slide for our slide. And there is that capability to do that?

-Right. Once they do that, it will stay the same Every time the report is run untilAnything else? No, I think we're good. Okay. All right.

So we have some more to do. We'll get those off to you as soon as possible. Okay. All right. Well, thanks, everyone. Thank you.

Those by the time I think, see what will not take time is these are more of a calculation perspective, that's fine. What only thing is when we put the product list and then start mapping on the retailers the exact where is ingredients and that the entire process and then crawling it, it will take time. And to be fair, we have started looking at the only custom views or what you're calling as reports should not be a problem. That feature implementation of overriding, right?

that you're going to our native dashboard and saying that yeah, this is correct and then change it to let's say a correct or slightly modified. That just needs implementation. That's all right. It's not a problem.

Okay, great. I know these four are going to be generated. I just want that, we just don't want the report, we also want the backend data. Everything that we just got was clear, right? The backend? We just want that functionality so that we can track. We just need something that's a high level score. Without going into the back end, we can't really figure out what the fix that's needed. Is it this image or that image that I need to be fixed out of the slide? So that can be really important.

Thank you. We just want to ask this. Thanks. I think this is good. We're good. Thank you. Okay, right. See you next.