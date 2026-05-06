# Geekspeak DSA implementation internal connect

Summary

### Action Items

- [ ]  Product Engineering to create the moving parts for the override functionality
- [ ]  Fix a meeting to work together on the process
- [ ]  BA to build the refresh pipeline for the dashboard updates
- [ ]  Develop the override feature that allows users to change tagging
- [ ]  Implement state maintenance to track overrides across iterations

### Share of Search Feature

- GeekSpeak provides share of search tracking for brands who sell through retailers and want to monitor their product visibility
- **How it works:**
    - Customers provide keywords (e.g., 50-100 keywords)
    - System crawls product listings for each keyword, capturing titles and thumbnails
    - Tiger API processes the data to identify brand matches
    - Output shows which products appear in search results and calculates brand's share (e.g., if Lassonde appears in 50% of results)
- **Analysis provided:**
    - For each keyword, tracks which products the brand expects to appear vs. what actually shows up
    - Calculates share percentage and average rank across expected products
    - Data feeds into a dashboard maintained by the corporate team, not GeekSpeak's native dashboard
- **Technical requirements:**
    - Must run daily with a properly built pipeline
    - Data must flow through: crawl → product processing → analysis → AI → dashboard refresh

### Content Compliance Feature

- **Problem statement:** Brands want their content (titles, images, bullets, etc.) to be displayed correctly on retailer platforms (Walmart, Loblaw's, and other Canadian retailers)
- **Current workflow:**
    - Brands maintain a "golden copy" or master content, either through PIM or other systems
    - They create customized copies for each retailer based on specific requirements (character limits, format nuances)
    - Content is syndicated to retailers, but retailers may or may not use it correctly
    - Manual validation at scale is not feasible, especially for ongoing changes
- **GeekSpeak's solution:**
    - Tracks reference content (what brand wants) against actual content displayed on retailer sites
    - Performs similarity matching and generates scores (0-100, with 100 being perfect match)
    - Identifies where scores are low so brands can take action
- **Use case context:** Retailers don't typically provide analytics to brands about content compliance, making validation tools necessary
- Content can change over time due to retailer guideline updates or technical issues, making ongoing monitoring critical

### Technical Challenges and Requirements

- **One-to-many image matching:**
    - For secondary images, the system must match one reference image against multiple retailer images in unknown order
    - Current approach is brute force matching
    - Exploring semantic similarity matching as an alternative solution
- **Scoring and tagging system:**
    - Need to implement three buckets: correct, partially correct, and wrong
    - Example thresholds: above 95 = correct, 70-95 = partially correct, below 70 = incorrect
    - Challenge: what customers consider "correct" may differ from the score (e.g., 94 score might be acceptable to customer)
- **Override functionality (new feature needed):**
    - Users must be able to override auto-tagging to change classifications (e.g., mark 84 score as "correct" instead of "partially correct")
    - Override should not change the underlying similarity score, only the tag displayed to the customer
    - This is attribute-level (primary image, secondary image, title, etc.), not product-level
- **State maintenance:**
    - System must remember overrides across iterations
    - If neither the reference content nor the retailer content changes, the override should persist
    - If either content changes, the system should re-evaluate and potentially reset the tag
- **Refresh and update mechanisms:**
    - Current system is static, running monthly or weekly
    - When users make overrides, the dashboard needs to refresh to reflect changes
    - BA needs to build pipeline intelligence to either detect changes and trigger refreshes, or implement a regular cadence (e.g., every 3 days)

### Architecture and Data Flow

- **DSA (Digital Shelf Analytics) platform:**
    - Standard platform for brands to monitor digital shelf metrics: availability, ratings, sentiment, share of search, share of category content, pricing
    - Content platform within DSA is powered by match data from Verisight
    - DSA is the standard offering; custom features that won't be productized are handled by BA layer
- **Data flow:**
    - Product Engineering builds the core features and override functionality
    - Data needs to be accessible to BA for dashboard creation
    - BA builds custom dashboards on Tableau for specific customer needs
    - Output from GeekSpeak feeds into customer's BA dashboard
- **Customization considerations:**
    - Different brands use the same scoring ranges and rules (not contextual per brand)
    - Custom features that aren't productized are handled through the BA layer to avoid bloating the core product

### Customer Feedback

- Customer (GeekSpeak's client) is happy with the progress
- Ali discussed the main points on a recent call

Notes

Transcript

We have customers here. Some cases we are onboarding. Again, this is one way of selling, right?

So we either sell it to a brand with such name as. --They don't have the capability to do BASF. But they are involved with their customers in different ways. That is win-win for both of them. In this case, what is the idea of DSMB or SIDIAT? We're trying to look at the internship. In this case, it's going to be a little bit easier. So they are doing two things. One is share of search. And the other is copy.

Share of search means simply can't find. They don't give us keywords. Thank you. So let's say they give us all 50 keywords. Keyword, let's say 100 products. Whatever, that agreement, let's say it's an agreement. We will get from one keyword a list of products. When you open the list page, brand name will be mentioned. Ok, so what we do is we take the title, we take the thumbnail and then we run Tiger API. It runs through that and it is able to type with that.

Basically it's not a very clever one. The brand is mentioned there and there is a brand in the key. Then what happens? Clients will get this output. First number pay, this number pay, that number pay. And then let's say we know that brand is let's say here in this case is Lassonde, here is Lassonde, here is Lassonde, let's say 50% is also Lassonde.

We know this. Total results, how much brand match is there, that percentage is there.

As simple as that, this is share of sales. The idea is that which are the key keywords, if you look at it from the use case perspective, which are the keywords which is important for me, how my product is showing up, and then which products are showing up. What they have done is, they will give us for each keyword, we expect these products to come. That's what we are showing. So let's say for the keyword, I'm just calling a direct question. I expect 15 keyword products to show up.

Then first we will look at those 100 products. And then we will identify those products. It's 100 common names. How much were you expecting? Only 10k now. That is my share. Then we take an average rank. Again, we don't do it in our native one because this is again very customized to be there and we will give, if you see our dashboard, we will give your share and all these things. That all analysis and data will go to the corporate.

They will create the dashboard. So that will have to do with the GYZ. . So that's one.

In the custom way. And see the relation is not a problem, it is one part of the problem. This is to be done every day. The pipeline has to be properly built in that data gets crawled, goes to the product, that is the product. And when the product, there is a pipeline from which the analysis of the data then goes to the AI. Then that dashboard is refreshed. So that's that. Second is content. In the use case, we talk about the thing in the scholars, which we talk about very well. One use case that they solve for the third one, they import it to another company. Brands want a content to be displayed on the retail section.

So, in this case, they send it on Walla, Walmart, Logos, they are mostly retailers in Canada. So they want this title to be there, this, you know, I'll show you their doctor, they want the title, they want exactly my title to be there. They want my front image to exactly match. All these things are there, so my bullet should be same. All these things. So what we do, the first bit of thing, right? This is my reference content.

---We track those things on the computer. Let's say one brick here. Let's say it's log-rot. We will try the primary, the GAS, the second grade. We will come to the secondary much faster. You text it, you text it. Then we call it, we do a similarity matching and call it to school. It's 80, 70, 100, if it's a perfect match, it's 100. The idea is, what we are trying to tell the brand is, wherever the scores are low, you should act on that.

This is a native Hattiebush. Match management. No, no.

I said that is to figure out if the match is correct. Match is correct. This is my content on Love Laws, let's say, and what I wanted it to be. Okay. So if it's not a match, how do I act on that? So, let's take the boat, boat is selling on Amazon, boat is selling on Flipkart, boat is selling on Kona, let's say on some factory to do the channel. So what happens is they store content with them and one is a golden copy or a master copy.

Either they are managing PIM through PIM or they have some other system or maybe disparately it sells it out. Then they'll create copies for each detailer. Because each detailer has some nuances, this is a coming into the first position, the midpoints come, this is the character, then from that they create those. Let's say Roblox They will syndicate it to the obler saying that this product, this content, we should show this.

Oblers might or might not take it or there are various complications because of which that happens. So one big use case for brands, very very basic use cases, I have syndicated, I have given it to the retailers and they should buy my content because that's what I'm doing. For them at scale to practice it's not possible. One by one if you take two three products you can actually manually do it. There is nothing in it.

But on an ongoing basis if it changes what happens who will do that.

Why don't retailers show analytics for brands? Like a retailer's category manager who can help the brand. So, is it the KPI of the category manager or the brand satisfaction of all the listings?

It's a lot of changes. See, if a retailer is ideally, ideally, there is a system, there is an open system. Let's say brand is having that. Retailer CMS system. That is published. All this is a system actually. There should not be any differences. If you look at it from that angle.

But our tool is more of validation. Correct.

But what is happening is that this is actually being displayed here. How that changes with time. There are lot of changes. For some reason they will change their guidelines. Something unco-lucked up, or something un-lucked up, And the brand does this so that the final sale and conversion is equal. As a brand I want my content to be looking good and as I want. I have done that effort of putting what should be there on Roblox.

What's he doing?

So what is GeekSpeak doing is preparing this measurement of code and give it to the grinds and the boss. Yeah, the primary image is good. So that you can use GeekSpeak. Piece of cake. Okay. What are the complications?

Two tips, one is secondary images is not one image. Thank you. So you were saying that in some retailers they will give us the format.

But in some retailers, they will not give you the phone.

Not the format, not the order.

problem statement isI have 40 meters of line of things. Okay, and iPod? So, this is one problem statement which we have to execute. So the crude way is do this, do this, do this, do this.

One to many matching. Yeah, only one matching. One to many scoring.

Let's see.

This is a pen. The bedding is not good in complete. This is most likely a pair.

So this is one pair. Do this with this and this. and then let's say this is the pair, then this is the pair. figure out and then Show that yeah, A or B product IE, B or A, B9, B or B, and B or B. Ideally, Yeah. But the problem is, it is a-It is like a brute force in the canzone. Can there be different ways? Yes, that's what for semantics do. to look at. They have the service of similarity matching.

Today what happens is we give them the image, the output is that, but then one problem statement given to them that they have to solve. The second problem treatment is, Do you remember what you were showing? Is that correct? Partially the correct. Thank you. And then there is wrong. Yes. Now the problem statement is that we take an image, or text, and we say it's a handprint. There is something very different, they say it is kept. Check it.

-Actually, this is his bucket. Let's say partially. We are called as or let's say it is It is exactly in their eyes it is correct but our eyes it is 90 or 95. So, Thank you. You give this code. They want it in this moment. We can say that above 95 is correct. itPartially correct. Let's say below 70 is incorrect. Or whatever. We can devise that. But what is happening in that too? What are they saying?

If we call it 95 and in 94 we call it partially current, then what is happening with them? According to him, it is correct. Then what happens? They don't want to report it as partial effect, they want to report it as correct. First of all, we don't have these directing, we just have the score. Thank you. Sue? If I'm calling it partially correct, How do I overwrite to call it correct? This is one thing that needs to be developed.

Today we just give this. The user has overwrite auto tagging. Yes. Now you have told that there is no auto tagging. This is in buckets.

This is let's say 84. There should be a, we have to call out Oh. Tags for different scores, what should be correct, what should be partially correct and what should be wrong. Thanks. We need to do for them to say that this is I can overwrite that. So if I leave cold and wash, is it correct? I should be able to call it correct. So The future will be a new feature that we have to develop, right? Thank you. Comparing two things. There should be a tagging based on the scores.

And once the user does that, they should be able to overwrite something and change it to correct or wrong also. Or this to wrong place, whatever they want. One thing that we should hear, one thought process, we should not change our scoring, we should just let this override. Then what happens if this gets overridden? We are not trying to disturb the system, but this is what gets picked up by by the custom report that they were shown and whether in the end they are going to use that.

Okay, now this mediaI'm three months old. Second complexity is, let's say month one--Now, I have already this correctly. I should not again overwrite this to say that no, it is partially correct and make it partially correct. Will there be a change in either this image or this image? Then again, we should notice Otherwise, this has to remain in Pakistan. that this change of what I've already done.

This is at Product level, not score level This is a content level. It is at an attribute level. Primary image. Contents. Primary image. Image or text. Secondary image, title, whatever some attribute. So this is this old stroke that if any attribute's match is 94 doesn't mean it is always going to be correct. We will tag it as partially correct.

But they might overwrite and say that no, this is correct.

But next iteration, the system should be intelligent enough to say that yeah, last time it was partially correct.

And last time we did a partial overwrite. Basically the state has to be maintained. Till anything changes, either this or this changes. So this will show the tag and that is the tag that will be used by VA to do that. Customer will come here and wherever they see that there is a problem, they will override it and go there.

But there was one column of This customer, GeekSpeak, they expect that the rules and the efficacy It will change brand by brand. It is contextual to brand. This is for say, Lassando. For Lassando, they had given us the current version. And we are tagging on that basis. Like if there is another brand, like Brand 2, For that, the rule, the range, the school, will it be changed contextually?

It should not be changed contextually. At least this is the same report that they are giving to brand number 2 also. So ideally it should not be changed. Another thing to look out here is that Yeah, so when I change this, this happens. What? Our system is slightly static. We do monthly once a week as an online program. Let's see if we can see anything here. If you do this, then what happens? The results are there.

We published that on the, what you call the, the B.A. dashboard. This is the report that we have on this. So let's say C year, they saw that now something is wrong and they went back and over-rate something on 10th of January. Then our, because it's a static dashboard, it won't run once, right? So after 10th January, what was the refresh rate? This thing, this process is not there. Because we have not given any user input yet on funfins. It was static because it was a reloading.

This is the first use case.

We are trying to put some input down.

So if this does not work, Refresh the time, Mr. Mayor. mechanism in which then after that this also should get updated. This will be done from the A side. There has to be this pipeline built where Intelligence in a way either saying that we will know that this change has been made so we have to refresh this or there should be a cadence in which that it's happening once a month, and it should be refreshed every three days.

The dashboard in the B.A. is built on tablet. Okay.

The layer of DA, because if the customer is asking for something done specifically to them which we don't want to productize, That is the idea. Ideally this entire thing should be taken out. But the problem is because it is on live data, that's why that's going to be done on a new age. What we can do is we can bring this thing up and say that this has to be configuration based. Let's say we want to say that customers want this overheading facility, we will be there that can be updated.

As a module, whose part is this? DSD The DSA module has all the data that March 1, it has a content platform. The data source of DSA platform is powered by the match we are doing from Verisight.

But DSA is standard for brands. So when they look at my digital chart, I'm looking at availability, ratings, sentiment. Share of search, share of category content, pricing. Pricing and dancing. So my friend. Tomorrow I'm trying to fix a meeting to-See, we can work together on this. You will get to the process also. So, what is the next question?

To execute the outcome, which moving teams will be used? We will use product engineering to create the moving parts.

The same product can be run on the platform by an audio exchanger. Plus one two red happens to be the refresh of the 10th January use case. How is that? This entire thing will be built by BA. This overriding feature we have to get it to 2. Product Engineering. and then we have to make sure that they are able to access this data.

So, moving parts is there. But in DSA tool, we have some extraction of feature and interface. This is already there.

There is a format by which this data can get shared to this. -I think the same version, now I want to refresh again. The version is not changed because This is this one. This is happening once a month. Usually, if it's monthly once, I will only refresh this next month because there is no new data. There is no new data in this, but there are changes. So, take the output gallons. They will consume that.

This is in line for the experience. They are happy. Ali was talking on the phone yesterday. That's their main spot. Okay.