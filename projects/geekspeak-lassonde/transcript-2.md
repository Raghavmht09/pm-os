# Geekspeak content audit internal discussion - DSA

Summary

### Action Items

- [ ]  Suraj's team to build N×N image pairing module within 3 weeks
- [ ]  Jatin to add N×N pairing flag and rearranged image pairs key to pipeline
- [ ]  Suraj to receive ground truth and actual data for testing
- [ ]  Team to confirm with customer which attributes will be checked (bullets, description, ingredients, etc.) in evening call
- [ ]  Team to define formulas for score aggregation at brand/category level with customer
- [ ]  Create requirements document for override functionality considering all edge cases
- [ ]  Define image classification types with customer (front, back, lifestyle, ingredients, etc.) at account level
- [ ]  Define report refresh frequency cadence
- [ ]  Implement role-based access control system
- [ ]  Implement audit logging for user actions

### Go-Live Timeline

- Go-live target: 3 weeks from meeting date (2nd-3rd week)
- Challenge noted: resource availability may impact timeline

### N×N Image Pairing System

- Product engineering team needs to implement automated N×N pairing of reference and actual images
- Previous POC was done manually by Varun and Lily, but automation is required for production
- System needs to handle cases where reference exists but no actual, or actual exists but no reference
- Pipeline will include flag to indicate which accounts require N×N pairing
- Additional key for rearranged image pairs will be provided in pipeline

### Data Flow & Architecture

- Data flows from product engineering → semantics processing → BA team for analysis and reporting
- Product team will process crawled data and perform backend operations
- BA team receives processed data and creates two types of reports
- Reference images are provided in jumbled/bespoke format, similar to previous implementation

### Customer Attributes & Reporting

- Attributes to be checked: primary images, secondary images, bullets, product description, ingredients
- Two-level reporting structure needed  :
    - SKU-level report showing individual product details (UPC, SKU type, scores for each attribute)
    - Brand/category-level aggregated scorecard (e.g., "red bag" category across retailers)
- Scoring system includes score ranges (e.g., 95-100% = correct)
- Color coding will be applied to aggregated reports
- Formula for brand-level aggregation still needs customer confirmation

### Override Functionality Requirements

- Customers need ability to override match status from incorrect to correct (or vice versa)
- Key design questions to resolve:
    - Should override change the score itself or just the tag/category?
    - For secondary images, should override apply to individual images or overall secondary image score?
    - Should system use predefined tags (e.g., "slightly correct") instead of binary correct/incorrect?
- Use cases for override  :
    - Customer KPIs/KRAs tied to content quality scores
    - Marketing labels on images that shouldn't penalize score
    - Subjective quality assessments (lighting, angle variations)
- Override should be configurable at account/attribute level to support different customer needs

### Version Control & Change Detection

- When reference or actual images change, system should detect the change and re-score
- Service already exists to compare current version to previous version
- If images haven't changed and user has overridden, system should retain last user action
- System should display both current score and last user action
- Monthly crawl cadence planned (e.g., 5th or 10th of each month)
- User overrides between crawls must be preserved

### Image Classification Types

- Reference images include classifications: side image, front image, infographic, ingredients, lifestyle
- System needs capability to identify and tag image types
- Image classes must be predefined at account level
- Customer needs to specify which image types are required for Lassonde account

### User Management & Access Control

- Current system has no role-based access control - all users have same permissions
- Need to implement role-based access with different permission levels  :
    - View-only users vs. users who can override/edit
    - Users restricted to specific retailers (e.g., Amazon only)
    - Users restricted to specific product categories
- Customer admin should control user creation and access assignments, not vendor
- Seat-based licensing model (e.g., customer has 50 seats to allocate)

### Audit Logging

- No audit logging currently exists in the system
- Need to implement logging for all user actions, especially overrides
- Logs must capture: user identity, timestamp, specific action taken (what was overridden)
- Customer needs ability to retrieve and review audit logs

### Report Refresh & Updates

- BA team can refresh reports at any cadence: weekly, daily, monthly
- User overrides can happen between scheduled crawls
- System must handle incremental updates when users override scores between full refreshes
- When product data updates, BA team receives data via S3 and regenerates reports

### Data Structure & Compatibility

- Output data structure will be same as POC
- System should work with both Lassonde-specific requirements (with tags) and generic product scenarios
- Configuration approach preferred to make solution reusable across customers

Notes

- Functional changes in semantics and product backend? - NA
- Are reference images coming from the match results done in veracite - semantics layer? - Yes
- What was the construct of products and keywords defined by Geekspeak for lassonde brand? (# of keywords and # of products on retailer PLP) - Keywords as a input is given by customer for searching and the # of products expected is also something they define because they don’t want all products of a certain keyword (ex: category) come for calculating the keyword wise search
- What’s the final actual-reference pair result set? Is it the secondary images final result? - Final match between ref images given by customer and actual images crawled from Match management (or any other attribute surfaced from Match management)
- How will reference images come to DW team and how does it be ingested into the product and semantics? - From files or shared in any other form (integration with PIM etc)
- Does the final report - brand wise audit file comes from product or what changes are required to be done from BA team ? - BA Team
- Functionality to override the match status - Correct/Incorrect (**Requirement)**
- Details for brand wise audit file:
    - Calculation formula of score card percentage
- What are types/classes of images at a brand/account level?
- Comments - Manual input in the file or it comes from product?

Transcript

Is the corollis ready?

the We can give sample data from the older ones. Yeah, on the range.

And to be honest, Suraj, If I give you, I don't understand, why do you need sample data? If I give you a set of images and set of other images, let's say that's all. So, so, why not? See, what... No, because the crawling and all these things for the actual thing will take some time.

Correct, I am coming back. So one is that building a module which will do this kind of rearranging of the image across comparison and rearrangement. That is one part that can be done with the images only for the work anything as I have mentioned exercise in a table. Then comes to the activation part of it. The execution part comes in the pipeline. The pipeline will be sent to us. Okay, and then our service has to accommodate that. and then what will happen?

This output will go and start reflecting on the dashboard. Suraj, the pipeline will remain the same. There won't be any changes in the pipeline. No, pipeline will remain same but in pipeline there will be some additional keys which willThe king has to send to us As a flag, the properties have to be go for N cross N. matching then only we will perform this and we also will be give a additional key of the rearrange image base.

Hold on Suraj, you want Jatin to give you that n by n pairing?

No. Because Jatin has to only-Flag. Jatin has to send us as a flag for this account where I'm sending the data. It has to be N cross N pairing has to be performed. It is not for all accountants. We have to keep it as a flag. N cross N pairing second to image, N cross N pairing flag. Yes, if the truth is present in that record, we will perform that exercise and additionally we will provide one more key to enter in the year end image pairs. That we have to submit.

So, it is one module building exercise and then into it checking that okay things are working. So, into it checking I need the data to be coming from product engineering getting our service and then going and getting things uploaded on the time. This also needs to be tested. Boss, soon I will say. Soon I will say.

Soon I will say. Not a place to discuss all that. You know the requirements. You can schedule a call with your opinion. Go ahead. My discussion here, again, I'm calling it out. I understand all that. There are places this needs to be discussed. We will discuss it there.

Why I asked the crawl data even one record because you can test the impact by time. Can you see this thing? Can you see this screen? This account is live. So can you see how you have got this?

If you have many ways to see or even in the... So this is-This is the ultimate. So, for this account suraj, csm and i we set you know we set and we did manually. So, basically reference data we checked the actuals and we mapped the actuals to the reference and we ensured that the reference is in the same order and we gave you. So, it was manually done, we gave you that and you guys just did this coding, but this time it will not happen that way.

So, you will have to do the pairing and tell which pair has to come here.

So, there will be cases like this where there is no reference or there are also cases where there is no actual. So, references there no actuals, actual is there no reference. I'll share this account ID in the Okay, so you have the requirements, I think. Hey. Not to get into technical details, this is not the call for that.

Just give me this, since Lily curated the correct pairs, Just give us the ground truth and actual data.

No, I don't have the jumble actuals that came from customer.

Okay, then I will jumble. Give me the actuals that I have taken. I will randomly jumble it and wait.

So, Suraj, the idea is that by the end of second, third week when we going live, We have to go live with this.

Second week of May is Go Live.

No boss, today, from today the three weeks that we have to Go Live.

Yes, I can pick up in that one. Okay. Three weeks, definitely. First week, it's the correct. Hey,. Okay.

It is committed from last month that once you come with your details, it will take 3 months to go live. Okay.

The challenge here is that from today if you start calculating, you will not be able to pull people to the exit.

Please. What interface changes, some part of the design part could have been done before. Because based on that we had started this activity in March 1st.

Hi, he's saying he's ready. How to execute a first level that also is... I don't have people. I have full people only after one or two days.

Okay, plan for it boss. This is the requirement you figure out.

Okay.

So before getting into that, now that is the first part of pairing of secondary units. Last time when we had done the POC, Varun actually did that thing of arranging for the products and did it so it got executed. that manual thing is not possible now. So, uh... So from content side, before we get into the changes that we have to do, Here? There will not be any ping system. At least to start with, I don't think they'll give us Second, it will be a very bespoke kind of a jumbled up reference.

Last time also it was like that. They gave us a location. Like, go here, go there, go there, go there.

It will be exactly the same. Why I am saying that, you know, that you will have to, if Vahegi is working, you will have to guide them, you know. Which is the first image, second image, what is the description, what is this? That way. And? Um... When you begin your, today when you are talking to the customer,We have to ask that,Hmm. Can you showcase the-I'm done here, thank you.

Just start shooting? Yeah.

I have some other thing on the way. Or let's say when we have with the customer, what are the attributes that we are going to do for them?

From the customer, we want to agree to a scroll down. Primary with secondary is fine. Bullets we are going to do. Description we are going to do. Okay. Is this... Is this the one or is there anything else? We want a confirmation very early. Maybe tomorrow itself.

See?

Cross bullets hai but this is something that we already have.

We have to defend last one, yeah.

So yeah, one confirmation needed from the call in the evening is what are the attributes? Because if I go to the, uh... Can I share my school? So if I go to the... Customer given Import. product description I am not sure what this means. Distinct rate.

Ingrident. Ingrident. Ingrident.

All these things, let's have a look. We'll take time and to agree to that. See, hello. If We execute normal scenario correctly. Then technically we can build this node, let's sayRoshan. If you get for each attribute let us say this product on Noblos or let us say maybe Vala, So let's say you get to prepare this report for this particular product. It's straightforward, you will get these details, what are the UPCs, which is the SKU type, Okay.

Okay. This wrong product. Even the UI will be there. Now we will have to call out that either the product title is slightly modified Correct, incorrect. Hi. Pongal. We get a score range for each. Good, good. Let's say we agree to something that you know 95 to 100 is correct. So we create this basically flattening theBack to the news. Okay. Okay. That's one. Second is creation of Higher order Score time, kind of.

Uh-huh. So... The red bag is a category. Okay. We can discuss with the customer today What is 100%? Let's say there are seven products on Walmart. Off red bag. And they want to further aggregate saying that what is going wrong there. So on Loblox also there are 7 products When they say mean pack image is 100%, is it that all seven are correct or something like that? You get it right? This is where we'll have to talk to the customer today and forget those things.

But this is also to be created from this shoeOkay. So again, at a retailer level on Bala, on let's say Walmart, there are seven products for the rent-out category. There are some formulas applied. The thing is, this is what is-Kind of, uh... and there is color codingOkay, okay.

That's the case. Yeah. So, this formula still they are not even right.

So, today we will.

I will share one more recording very initially that we have done today, but you can look at that. But this is not something to be a problem if we Get this right. at a skew regular level. And this is just an aggregation.

Yeah, I got it. Once the data is there, we can connect. At least for SOS, what is the expectation when we will have the data?

I don't have any input for the Zotna.

take dummy data and start building.

No I am building from this data only.

Yes.

POC did help you on some keywords.

No, that is fine. The structure of the output will be same.

Because we received from product. So, product data structure will be same. Yeah. Can you see what products were there?

I've seen, The actual project that we are doing is not a song.

That's one of the phone juice. What we did the POC was for McKinney.

No, no, no, we did for juices also. We did for juices, yes. This is the process, right?

Data will come to products, products will process it, all the back end things that semantics does, calling all happens. From there the data goes to BA, BA performs this analysis, creates those two reports. Only now complexity remains is How we are going to help customer withUh. I would say... Changing of the status. You are overriding the statement. Okay. What is going to happen is customer will say, will check this for this queue on Wallah. Come to our dashboard.

Let's open our demo account. This is where we come in. How do we envision it? And what are the repercussions?

I think that indeed. Yeah, I'm just, you know, leaving.

the I'll have something by maybe by Friday. We can connect to the source part. Realize your problem.

Agreed, we can start with the SOS part. But the point is, now is the time to ask any questions that we may have to the customer. Again, I don't want you to do one thing on content and then again we have to rework. We do it once, we do it right. I have one-That's why I was asking that it's not about doing it, but making sure we have all the.

Okay, and it's two different dashboards, right? One for a session, one for--Yes, yes, yes. Okay.

So It's something like this, right? Uh... At every level, Either we say that So let's say we have called this 4 as 95. for some reason let's say 95 and above we call it asHey. Just correlating, but they want to call it incorrect. there should be an override function here Okay. You are able to see the screen right, guys? No. So It's something like this, right? So from product side or PM side, what all do we have to think about?

Customer has asked us to basic thing is his sleep alignment is Ability to override at any attribute level. Looks simple, but then there are others. Let's say hero image is fine. That is a hero image. Will you allow override? Yes, you are right. What happens in secondary images? Will you override each secondary image? or at an overall zipping range. That's one. Second. Oh. Are we thinking about putting a tag there?

So score remains the same, let's assume that this was 50. and this is correct, I want to make it correct, 100 or you know make it from incorrect to correct. Should we tag it as incorrect? Then Ask the customer to select, no, override it to correct or slightly modify, whatever they call it, slightly correct or something like that. What should be our goal? That's where, so that's one. So how do we do it?

Either we can say that, you know, we can go around the score itself. or we tag it based on the score and allow them to Not change the score but overwrite the tag. Uh... Overriding the score has its own side.

Sorry, I'm dropping off, anything else needed?

I have one more point. I don't know if it will be relevant, but we can ask. So when we received last time the references and actuals, In the references, they call it out like-This is side image, front image, infographic, ingredients, and lifestyle and all that. And I see in your report there are also lifestyle images there. So if we have to even call that out when we are doing our checks.

One thing, that's a good point. Is it possible to To identify an image, to which Because there are images like a person drinking the juice.

That will be like a lifestyle image. Question.

Are we able to identify it?

Identifying what type of the phage it is. Also, there is also one service we can try. No, no, one is...

You remember in the initial part we discussed that we call that front or something. That is one part and then, okay, that's one. I'm saying when you give me a pair, You paired 1 with 3 or whatever it is but can you tag it saying that this looks like a front facing image?

In that case if the classes are predefined.

Classes are predefined on an account level.

Yeah, then it can be. That is the requirement, yeah. You got it right.

Let's say it'll either be a front facing, back facing, lifestyle. or something we will ask from the customer Yeah, I'll tell you about the world of the big picture. Another thing to look at from the customer input is what kind of types of images that they want for the song. Okay, yeah, as soon as you can drop off.

Thank you, witness.

So one is-Where do we allow this to overwrite? Either we allow the override to be overridden so that this becomes 100 if it was 50 and then subsequently goes to BA, goes as 100. That's number one problem to solve. Or to look at the consideration where the override should come in. Either this or we give it. Second is once I have overridden this, This way. What is the frequency? Off the ground. What about you?

So month one we did this The pipeline part, I'll tell you Prashant, here the challenges can come in from BA side also. We cannot rely on one time update Let's assume that first of Jan You did, products gave, product did all this, like you know, all happened, everything happened. First of Jan, by evening, we are live, okay? Now, customer sees that, okay, he goes on 3rd of January and overwrites something. Okay.

Goes to the product and overwrites. Then what happens? How will you update? Because it's a monthly thing. Okay.

If it's updated in the product, then I can place it into other S3 sector with the next single.

No, but will you refresh or report again?

Yeah, from our side we are the big guys.

But how often do you refresh? Ah, so people use one of the reformers. If you want me to do it weekly, daily, monthly, anything is fine.

Okay, fair enough. Then something like that we have defined. This crawl is monthly. So let's say 10th of every month or 5th of every month some cadence will be decided that every 5th of month this will go like this. Point is after 5th or let's say the same exam. First, after that 2nd, 3rd, 4th, 5th, any time they can do the changes like that overriding part. That's one. So how that pipeline will be a, how often will it refresh?

Second is, Once month one I have done and said that this is correct now. One to me. But what happens? It will again get spoiled.

I was about to ask this question. Then?

This Overriding should be retained. Yes.

Customer should not be retained.

Till. the idea of these two images change. Next up, on base park. Which is? No. Version 1 was this, Version 2, exactly the two things are there. Okay. It should say that overriding should again take place. But then let's assume for some reason the actual image changes or the reference image changes. Then, uh... Uh... They didn't trip knock. Then it should not be overridden, then again the user has to overwrite or maybe that is correct now, who knows.

So those are the challenges No. This part of Overriding something that we have done is a is something that a lot of customers are asking. See what is happening, this is a reporting platform. They are aggregating this and reporting. If you go to the dashboard also, there is that is what happens. What their KPI is a lot of time happens is that customers The users, KRAs are defined that your funding quality should improve from 75 to 80.

Now if somebody puts this marketing label, let's say this was marked there, or let's say this, This is the actual image. This was not there. And retailer puts this Marketing label, our scoring will go down and her KLS goes for us. Somewhere there is always this thing that can we override this. So one is from a GeekSpeak or a Lassonde use case that there are tags around this and we overwrite that. Now the generic scenario, if this was a generic product, let's say for lack of, let's say and they also want to override this.

There is no tagging because they are not called out any time. Then can we allow that also because then I am making something which is applicable for all. Okay, but... If I give the functionality of overriding What are the implications? Are we making the user do something that is They are controlling, they are trying toIn the system, that's one. Second. At a user level, then if any changes or overriding happens, that has to be at a user level.

user level control Who is allowed to do it? So then there has to be a permission level dashboard. as in role based Saying that one person is only able to view and let's say there is some person who can also edit or whatever. Override and all the logs have to be maintained. Not very unstandard for any things or things like this, but all these things are not there in the current system. So, when it is being defined, That needs to be taken care of.

So what I would suggest as a first thing is You've got the environment right? You have these sheets also. You know the product? some part of it and consider this Can you write an environment doc Considering all this, it should not change what should happen. Consider other cases like next month, And what is your suggestion? Should we change the score or should we change the tag? Keeping in mind that We are giving the system if we are giving this.

Second is, if we give this, then we are able to generalize it for let's say some other customers who have also asked us. So, after weighing the pros and cons, we can take a final thought and go ahead. Score versus category can be a config also. That's not a problem. Exactly. No, that's not the same. That also can be a config. I had a fundamental question that there is a score which is displayed to the user.

It is calculated and logged in a defined process.

So if I allow even Let's not talk about role, any user who is overwriting, if that action happens, does this go back as a feedback loop to the process of calculating score. That's not going to happen.

That's not going to happen. It's not there yet. I haven't thought about it.

That's the right thing to do. If I take...

I understand what you're saying. Next time when you do it... So we can take that input from user.

Example you mentioned that there is a marketing label but they say that you labelled it as incorrect but it is correct.

How many will you support? That's where I understand that you call it out there. It could be able. It could be some, I don't know, text put on the image that I didn't post. Groupies, bring guys, you should. Could beLight changing view. That's it. You are looking, the image is showing this way in the reference. In the actual, it's slightly tilted. But the customer said that boss, it is okay for me. So that guy is right, that's the thing about it.

How many of these will we keep going back to? So that is what resolution of your screen maybe that's what If there were standards then maybe yes but it is again subjective to different customers category of products retailersI'm gonna come to you. If we are able to define all this and give it to semantics, they are able to implement.

But to start off with the vanilla solution is which I understood. If they override that score or category, the next time when this scoring happens, it should retain the last user action. It should not override.

One other way is that in the beginning we ask the customer that if the marketing label is a problem, Should we consider it for similarity or we should consider no, we should not? Text should be penalized. No, we should not penalize. If we give this header one thing to the semantics, Then it's an easier thing for them to do. All we're guessing is If they are overridden, then it goes back and again this config gets updated.

It's the same thing.

Don't penalize or penalize.

My solution was vanilla which you mentioned at the start that if it is overridden by the user, action has happened. The action has happened it will only differ when either of the images will change. Correct. Else whenever the next run will happen I will consider the score or label which my last user action may save. For me there is no attribute based penalizing or categorization.

What you are saying is if there is an overriding done for an attribute and we get the crawl again if we are able to identify that this has been overwritten Then we don't score it.

No, we will score it. We will showcase to the user.

There is no need to score also.

It happens, for example,Because of some attributes, we changed the category. Now the next time that subjectiveness might have changed because of their set of rules also. So I will show you the score and confidence score and I will show you the last action was this.

See, that's the broader point I'm asking. that the reference and the actual image has not changed. Great. Should we burn more tokens and score it again?

Get into the process of scoring.

Even if let's say this to this next time has not changed, I have overridden, at least leave for the other ones, but this should be again scored.

Till the base lines are not changed there is no need.

Based on that, only they ever report, which say is 100% and 90% of the time.

. My For example, it was incorrect, we mapped it as the score is switching.

First of all, incorrect is nothing. Yes, that is only the Lasso material. Correct. They are defined sometimes.

But what will happen in other scenarios will be, who are looking at literally, you know, overall score, right?

For example, second image score is this much based on these five images that is scored, right? or middle game time. What will happen is for example 50 score is incorrect but they want it as a marker as correct.

There is no incorrect correct they want to change 50 to override it to 100.

So 150 might go 90-95 then according to them it is correct. So, if I change the, see all the score are cascading, right? So, let's say this is 95 because it is an average of 4-5 scores. If I make the first two 0, let's say no this is, you are showing here, no it is not, it is incorrect. So that content quality of 95 becomes around 50, 60. that becomes 60 when I aggregate this and show it at this level, there is an effect there also.

That's the thing, that's why they are crying saying that if I am not able to change it, Why are you realizing me there? That's something that we'll have to See how we kind of look at this. So now the variables have increased right, it's not just overriding, first is do we Do we do it at a score level? Do we do it at a tag level? That also should be a configuration. And it's a good solution that you suggested that you know, when it crawls back, so what do we do? Do we not score it or do we score it and retain it?

From a UX perspective, it is straightforward. The last action, you show the score or label and also show the system that has last cached it. So now it is a competitive... But the system has to identify that Old image and current image have changed And this too?

That capability already exists in the system. How many rounds did we do for this? --What was that?

Do you hate me? No, no, no, go ahead, go ahead. Sir, you have to attend the meeting today.

Get clarity on two things. One is share of search. Second, the numbers that were there. I will take clarity on the second one. Okay. You already called this. There is already a service. Please. This is the service, same service, but what it is calling out is? Actual has changed since last time So the service of comparing from this version to the previous version and calling something out that has it changed or not.

Let's assume that it has changed, we have understood it, then we have to re-score it and we have to overwrite it again. Malak, my point is that should be defined in your Chica.

And for any user, irrespective of any customer brand, hierarchy wise, their final product Final score overwrite is also possible and attributes like below is also possible. Beat, text, image, everything is possible.

I The thought process starts with lasagna but It should be a generic solution and if you want to make it, make it configurable. At an account level define what attributes are overriding capability. so then it makes it generic And you mentioned there are no audits yet.

audit log the What action is being done that is not happening.

Okay. Cookie? DSA is a read only system right now. There are very simple I don't think there are any actions that the user can do that changes anything.

Anywhere, anywhere, entire thing.

Only at a UI level it changes. Let's say I want to hide this widget, I want to recreate this dashboard with this widget, but that is at the representation level. Other than that I cannot change anything. So those actions itself are not locked or those capabilities itself is not there. Cheater. Because what will happen is, if someone overwrites something and the customer comes back and says that this is wrong, who did it?

They should also be able to, it was ABC user. At this time and place whatever in this time they had overwritten.

And then the customer would need the retrieval of logs also. It has to be stored somewhere. And how do you manage your users? If any user is logged in... Rohitha, you can drop off. Okay, I'm happy.

See, I'm thinking yes, ma'am. User management isThere is no admin or anything. And This is something that the other day you remember Shubham was talking about. Eventually, we... You should give role based access Now, role based access itself is a thing that has to be brought in horizontally. I'll tell you from the ASL context. without let's say we don't give override also but then still the roll mesh access is needed Let's say we only have one type of user.

But let's say a customer says, "This guy is only interested in I don't want to give him access to otherYou should be able to do that. Or he says that okay, he's only handling Amazon for us. I only want him to look at Amazon things.

Only that particular category products. You define the use case for user journey and after that you give them access to the whole journey or part of the journey. We're all heading to the other side.

How do you manage your users? Question. At the beginning of the onboarding they asked the customers who are the key users. They take their name and create it and get access. Because there was never a user action so there was no role based thing.

This is... Even for retrieval also there are some data points and some things which are not meant for a type of user because of which you are increasing cognitive load or you are showing unnecessary information.

That's what I am saying. Role based access control is usually a genuine thing. I would like to take that one step forward. If there should be role based access control and that control admin on the customer side should have, not us. Even a user creation should be done. See, we tell the customer, "Boss, you have 50 seats." Ok. You create it. And when you're creating, let's say, Raghav as a user, which products he has access for,
		

Summary

### Overview

- Building a mechanism to override content matching scores and attributes for brand-scraped content
- Configuration will be enabled at the brand entity level for overriding various attributes including image match scores, text match scores, and matched brand products

### Core Requirements

- Define overriding construct at category or enum level for end user selection
- Implement match score correlation with categories/enums
- Enable brands to correct content matches that the system has marked incorrectly

### Score Definitions and Ranges

- **Correct**: Above 90 (90-100)
- **Partially correct/slightly modified**: 60-90
- **Incorrect**: Below 60 (0-60)
- Score ranges will be larger rather than smaller to reduce subjectiveness

### Delivery Pipeline and Refresh Cycle

- Need to define workflow between first refresh and next refresh
- Determine how delivery pipeline flows from product to BA for final reports
- BA should be able to update reports daily or 1-2 times per week when overrides occur

### User Access Management

- Implement audit logging for all override activities
- Define role-based access:
    - **Admin/Editor**: Can perform override updates
    - **Viewer/Operator**: Cannot perform overrides due to lack of subject matter expertise
- BA report should refresh automatically when updates occur

### State Management Between Refreshes

**Vanilla solution**: 

- If baseline reference image/attribute and original crawled attribute remain unchanged in DSA module, maintain last user action (e.g., incorrect to correct)
- Requires state management to preserve user overrides

**Optimized solution**:   

- Define specific triggers and cases requiring user override
- Capture user input on why override is needed
- Two potential approaches:
    1. Feed input to semantics layer for next matching cycle AND ensure QA team doesn't negate overrides in these categories 
    2. Use input to skip score recalculation while incorporating it into core semantics algorithm 
- Example override categories: product typography, image typography misalignment, rephrased/reorganized text, marketing labels on images
- Alternative vanilla approach: Don't change category or score until baseline reference attributes are edited in the system

### UX Considerations

- Design structure for displaying final scores rolled up from leaf node attributes to averages
- Define UX for standard feature implementation

Notes

Transcript

So this is about the product requirements and the overall architecture of the feature. So the main thing is we will need to build mechanism to override the final suggestion be it content score or be it content attribute for the content we have scrapped for the brand. And to start off with there should be a configuration at the brand entity level whether the overriding of any attribute be it the images match score or be it the final text match score or any other thing related to content or what brand products which are matched.

We should allow this. Second we would need to define something which would either consist of the overall overriding facility construct at the level of either different categories on the enums. which the end user would be able to select and override upon. And for this we would need to do the match score correlation with this category or the enums. Example, there is a product for which the brand says that the content matched is correct, but we have marked it as incorrect.

Now what is correct and incorrect and what is maybe partially correct is something which we would need to define. You need to define basis or range of schools. Correct would be above 90 and incorrect would be say anything which is lesser than 90. In general it would be a larger range, it would not be a smaller range and there would be something which is slightly modified but correct which probably would be say in this case would be between above 60 and 90.

between 90 and above 90 to 100 it's correct so something which is 0 to 60s would be the for the enabler like GeekSpeak for the brands which give the final content audit report they would say it as incorrect now we would also need to define that between the first refresh and the next refresh How would the delivery pipeline look from the product to the BA on the final two reports and how would BA get to update it maybe every day or once or twice every week when the overriding thing happens.

For this we would need to log this activity as an audit and this would also require something related to user access management. For example, there is a user which has this role to do the overriding facility, say an admin. He can be an editor. But a normal viewer or an operator which should not do this activity of updates because he is not the subject matrix but he is not going to check it and do this variable subjectiveness didn't come from it.

Then you would give the role to him as a viewer. Then once this update happens the BA report should also be refreshed and the third part would be how do we manage the overwriting facility till the next refresh. When the next refresh happens the vanilla solution can be if the baseline reference image or the baseline reference attribute and the original crawled attribute has not changed per se, has not been updated in the DSA module, then we would need to consider whatever was the last action from the user, example incorrect to correct.

So we would need to maintain that, do the state management in this case. A slightly better optimized solution would be we would first define on what triggers and cases the subjectiveness comes When the user would need to do this action of overriding and we can take that as input when the user is doing this action and using this input two things can happen. One either it goes to the semantics layer and the semantics take this into account when doing the next matching and again subsequently the QA team would also need to do this.

when they are doing the manual QA for the match that they do not negate anything which comes under these four or five buckets example product topography, image topography misalignment or slightly there is a text which is rephrased or rejumbled or there is something where the image has some marketing label on it so these can be the cases The second either this or what can happen is we take this as input and we do not consider this for doing the recalculation of the score.

However, this goes into the core semantics algorithm that when the semantics is doing the match for a particular product attribute type. it considers it into its algorithm and then computes the final score out of it. So again very subjective, Manila solution still can be, we do not change the category or the final score until the baseline reference attribute, image, text or whatever of the content and the matched original attribute has not

particularly edited in the system. The next leg would be around How do we showcase the final scores from the leaf nodes which is multiple attributes and rolled up to an average and for the cases where it is going to be a standard feature, how should be the UX structure of it?