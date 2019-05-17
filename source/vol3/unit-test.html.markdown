---
layout: vol3
content_type: text/html
title: "Unit Test: A game for three people for about an hour."
---

<header class="article-header">
  <div class="topline-widget">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>

  <div class="article-title">
    <h2 class="text-uppercase">Unit Test</h2>
    A game for three people for about an hour.
  </div>
  Copyright 2018 by Eva Schiffer
</header>

*Unit Test* is an example game for testing the gender\_swap utility. It
is also a LARP that can be played by three people. Two people play
robots with a more traditional player role in the story. The third
person plays a human engineer and has a role that is somewhere between
that of a traditional player and a traditional GM.

Before casting the three players should first agree which of them is
going to be playing the human engineer. This player takes a less active
part in the roleplaying of the game, and is responsible for most of the
logistics needed to organize the game.

## Secrets

This game contains a handful of secrets that are intentionally withheld
from the robot players out-of-character. If you want to play this game
with secrets, the players of the robot character’s should only read
their own characters sheets before the game. If you play the game as a
robot, you can later play the game as the human engineer, since the
human engineer knows all the secrets in the game. If you want to play as
one of the robot PCs and be surprised by secrets during the game, stop
reading this document now.

If your group prefers to play the game transparently (i.e. with
in-character secrets, but no out-of-character secrets), you can have the
players read all three characters sheets and this document before the
game. I would only recommend playing transparently if the players
involved are experienced and comfortable with transparent gameplay.

All three players should agree on whether they are going to have
out-of-character secrets or play transparently. Do not read any further
in this document if you have not yet discussed this with the people you
plan to play with.

## Plot and Character Summary

This game is about one human and two robots grappling with the
repercussions of loading a human mind into a robot.

Previously a non-player character named Dr. Stephenson started a
research project attempting to scan human minds and see if they could
possibly be emulated in a robot’s positronic brain. He did not have
authorization to try putting a human brain scan in a robot, but loaded a
brain scan from Dr. Calvin into Unit B anyway.

Dr. Calvin is the head robopsychologist at U.S. Robots and Mechanical
Men, Inc. Dr. Calvin is consulted on the ethics of the company’s
research and is responsible for making sure that humans and the survival
of the company are not endangered by non-standard robots. Dr. Calvin is
aware of what Dr. Stephenson has done and is trying to assess the risks
of this situation. The player of Dr. Calvin has a brief in-character
scene at the beginning of the game, but spends most of the game simply
listening to the robots in the interview.

Unit A is a standard robot and Dr. Calvin’s assistant. Unit A is unaware
of the actual situation and has been instructed to figure out what’s
going on by interviewing Unit B. Unit A spends most of the game
interviewing Unit B and the rest talking to Dr. Calvin.

Unit B is Dr. Stephenson’s lab robot who has been loaded with a brain
scan of Dr. Calvin. Unit B is in a bad situation, since the laws where
never meant to be applied to a robot who is logically also human. Unit B
spends most of the game being interviewed by Unit A. Unit B is very
likely to be erased or destroyed at the end of the game.

## Casting

Casting is handled by the player of the human engineer. The rest of this
section will speak directly to that player.

First ask the other two players the following questions:

*The robots in this game can use she, he, or they pronouns. Which set of
pronouns would you prefer your character to use in this game? Are there
any of these pronouns that you would absolutely not want to use for your
character?*

*Would you be willing to play a robot character who is very likely to
have their personality erased at the end of the game? Would you prefer
this character or one who is unlikely to be erased?*

Based on the answers, determine which person plays which robot and which
pronouns to use for the characters.

There are two robots: Unit A and Unit B. Unit B is very likely to be
erased at the end of the game. Unit B has also had their robot AI
blended with a mind scan of the human engineer. Since the gender of the
human engineer is determined by what you want to play, you will need to
make sure that this is a gender that the person you give Unit B to is ok
with having associated with their character identity.

If possible, give Unit B to the person who is more ok with their
character being erased at the end of the game. Chose the pronouns for
the characters based on the player preferences. Make sure the player of
Unit B is ok with playing a character of your preferred gender. If not,
check to see if there is a way to make a better match with the other
player as Unit B.

## Gendering

In the genderList.txt file fill in the genders you plan to use on the
right side of each line. Finished lines will look something like:

```
Dr Calvin: 01: female/male:              Female
Unit A:    02: female/male/neutral they: Male
Unit B:    03: female/male/neutral they: They
```

The first section of these fields is a descriptive name (Dr Calvin, Unit
A, or Unit B). The second section is an identification number that is
associated with that character in the markup syntax (01, 02, or 03). The
third section is a list of possible genders for the character, in the
order they are written in the markup syntax of the character sheets. The
final section represents the gender the character will be given in this
run of the game. In the example above Dr. Calvin would use female
pronouns, Unit A would use male pronouns, and Unit B would use they
pronouns.

**If you want to test the command line version of the gender\_swap
utility**, run the following command on the command line (you must be in
the gender\_swap/source directory):

```bash
python -m gender_swap swap -g ../unit-test/genderList.txt -i ../unit-test/ -o ../../test_out/
```

Look in the output directory (the test\_out directory created by the
program one directory up from the gender\_swap directory) and confirm
that the three characters have been set to the expected genders and
their file names changed appropriately. Search each sheet for the ‘\[’
and ‘\]’ characters and ensure that all the markup sections were
replaced. If ‘\[’ or ‘\]’ are present, then something has gone wrong
with the replacement of the markup. If something has gone wrong, and it
would be super great if you filed a bug report. :)

**If you want to test the GUI version of the gender\_swap utility**,
start up the GUI (either by running “python -m gender\_swap gui” on the
command line, or by opening a pre-built version of the application).

Click the “Load Gender List” button on the “Gender Definitions” tab and
select the genderList.txt file to load. Verify that the character
genders you expected are loaded into the table on that tab. If not,
double check that they are set correctly in the genderList.txt file.

Open the “Files and Processing” tab and click the “Load Files” button.
Select the three character sheets in the unit-test directory (you should
be able to select multiple items by holding shift) . Verify that the
files you expect are loaded (“01.Doctor Calvin.rtf”, “02.Unit Alice.Unit
Alvin.Unit A.rtf”, and “03.Unit Betty.Unit Bob.Unit B.rtf”). Click the
“Select” button and select an output directory outside the gender\_swap
directory structure. Check the “also process file names to gender them”
checkbox. Finally, click the “Process” button.

Look in the output directory and confirm that the three characters have
been set to the expected genders and their file names changed
appropriately. Search each sheet for the ‘\[’ and ‘\]’ characters and
ensure that all the markup sections were replaced. If ‘\[’ or ‘\]’ are
present, then something has gone wrong with the replacement of the
markup. If something has gone wrong, and it would be super great if you
filed a bug report. :)

### Setup

Each player should read over the gendered version of their character
sheet. You may wish to print these out for convenience. If you are
reading the sheets directly before the game allow 10 to 15 minutes for
players to look over them. This is probably more than you need, but some
players need more time than others to take in the details on a
characters sheet.

Dr. Calvin’s player should find two spaces that can be used for the
game. The first space will be Dr. Calvin’s office and the second will be
the lab room where the robots converse. If possible, these spaces should
be far enough apart that you can’t easily hear people talking in one
from the other. Tell the player of Unit A to wait in Dr. Calvin’s office
and tell the player of Unit B that they’ve been ordered to sit and wait
in the lab room (their sheet has a reminder that they cannot leave this
room on their own).

### During the Game

Dr. Calvin’s player should spend about 5 minutes in their office
explaining to Unit A in-character what they need Unit A to do. Important
points to remind the player about include:

You think that there may be an irregularity in Unit B’s first law.

For safety reasons you cannot be present in a room with a robot who may
have faulty laws.

You need Unit A to try to determine what is wrong with Unit B and report
to you.

They should return to you to explain what they’ve learned when they
think they understand what is wrong with Unit B or when you call for
them.

Answer any questions the player of Unit A asks you, but do not tell them
what is really going on with Dr. Stephenson’s research or the brain
scans. If necessary tell them that you can’t disclose information to
them for security reasons.

Then tell them out-of-character that you will be listening to their
interview out-of-character. Set up an audio call between your phone and
their phone (use Google Hangouts, Skype, a regular phone connection, or
whatever else works for you) and have them take their phone with them
into the interview room. Mute sound on your phone so you don’t interrupt
their interview accidentally.

Listen to the interview and interrupt to call Unit A back to you if they
haven’t figured out what’s going on with Unit B in 30 minutes, or sooner
if the players seem stuck or bored.

When Unit A returns, ask them what they discovered (briefly, you don’t
want the other player to have to wait to long). Then tell them the game
is over and gather the two players together for game wrap / debrief.

There is a slight chance that Unit B will convince Unit A to help them
escape before you can intervene and call Unit A back to you. If so, you
can tell them that Unit B escapes the lab and disappears among the robot
population of Earth.

### Game Wrap / Debrief

Start by explaining what conclusion Dr. Calvin has come to about the
danger inherent in the situation and what you intend to do with the two
robots because of that.

Encourage the robot players to discuss how the interview went, and what
conclusions they came to (both in and out of character) about Unit B’s
humanity. Ask the players to recount their favorite thing that the other
robot player did during the interview. If the robot players did things
that you found interesting or amusing, be sure to mention those.

Give the robot players some space to discuss parts of the game that they
enjoyed or found difficult. Different players will internalize the
emotions of characters to different levels, so some players may want to
discuss emotional bleed they experienced, and others may not have
experienced any or may not want to discuss it. Give the players enough
space to gracefully avoid discussing their internal experiences so it
will be their choice whether they want to or not.

### Notes

The game structure was inspired by the story [“Little Lost Robot”](https://en.wikipedia.org/wiki/Little_Lost_Robot). Dr. Stephenson is
indirectly named after Stephen Byerley from the story [“Evidence”](https://en.wikipedia.org/wiki/Evidence_(short_story)). Dr. Calvin,
U.S. Robots and Mechanical Men, and the three laws of robotics appear in
many of Isaac Asimov’s stories.

The explicit belief statements on the character sheets were inspired by
an early draft of Strix Beltrán’s game *Möbius*, although the belief
statements in *Möbius* are far more elegant than those in this game.

<header class="article-header page-break-before" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Unit Test</h2>
  </div>
</header>

<header class="article-header" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Doctor [01: Susan / Scott] Calvin</h2>
  </div>

  Copyright 2018 by Eva Schiffer
</header>


Age: 37 years<br>
Gender: \[01: Female / Male\]

### Character Summary

Doctor \[01: Susan / Scott\] Calvin is the head robopsychologist at U.S.
Robots and Mechanical Men. The game takes place in one of \[01: her /
his\] isolation labs. Dr. Calvin primarily takes on an observer role in
the game and knows the secrets the robots may be trying to conceal.

## Belief

Robots are fundamentally good actors as long as they are constrained by
the three laws. A properly built robot is far more truthful,
trustworthy, and predictable than a human, but they are not humans and
it would be a mistake to treat them as such. A malicious human owner
will destroy the mind of a properly built robot, rendering it
non-functional, long before they could turn it into a danger to society.

### The Three Laws

All robots must follow the three laws. They have complex AI
personalities that develop to handle their interactions that are not
directly governed by the laws.

1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
2. A robot must obey orders given it by human beings except where such orders would conflict with the First Law.
3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.

### Backstory

As the head robopsychologist at U.S. Robots and Mechanical Men you must
be consulted on all new research projects as a safety check to ensure
that projects do not endanger the existence of the company or the lives
of humans who interact with your products.

A few months ago you were consulted about a project that was attempting
to generate digital scans of human brains for study or simulation. The
engineer in charge of that project, Dr. Stephenson, assured you that
there was no risk for humans taking part in the project as he only
wanted to take passive scans of human minds for study. You were somewhat
skeptical, since the whole course of this research could raise all sorts
of issues related to the first law. However, you figured the initial
research was relatively harmless and after Stephenson tested the
scanning setup on himself you judged the risk to be minimal in the short
term. You even allowed him to scan you as he had requested volunteers
from within the company. You were promised the scans were only for
investigation and they would not attempt to load them in a positronic
brain.

You kept your eye on Stephenson and two days ago it came to your
attention that he had progressed to attempting to load brain scans
(including yours) into a robot in his lab. He did not go through the
appropriate channels to approve this step, and you are quite sure the
ethics board would have objected, as you are on it.

It is currently Saturday and Stephenson is not expected back in the lab
until Monday. You have confiscated his lab robot, \[03: Betty / Bob /
B\], and intend to test this robot to determine the immediate risk
Stephenson’s project poses. In order to do this, you have enlisted your
assistant, the robotic unit \[02: Alice / Alvin / A\], to interview
\[03: Betty / Bob / B\]. \[02: Alice / Alvin / A\] does not know what
Stephenson’s project was trying to achieve.

You intend to tell your assistant that you suspect there may be an
irregularity in \[03: Betty’s / Bob’s / B’s\] laws and you need \[02:
her / him / them\] to investigate it. You also plan to tell \[02: Alice
/ Alvin / A\] that due to safety procedures, you cannot be present for
or listening to the interview (in case there is a flaw in \[03: Betty’s
/ Bob’s / B’s\] first law). You intend to listen in on the interview
remotely without \[02: Alice’s / Alvin’s / A’s\] knowledge. You expect
that \[03: Betty / Bob / B\] will try to escape by convincing \[02:
Alice / Alvin / A\] to treat the brain scan data \[03: she carries / he
carries / they carry\] as human, although it’s possible that \[03: she /
he / they\] will just try to conceal \[03: her / his / their\] altered
state.

If \[02: Alice / Alvin / A\] discovers what has happened and reports it
to you, knowing that you are likely to remove and delete the brain scan
data from \[03: Betty / Bob / B\], then you know the immediate risk is
confined to what \[03: Betty / Bob / B\] may do, and you can simply
deactivate \[03: her / him / them\], allowing for further study of the
situation. If \[02: Alice / Alvin / A\] does not discover what happened
or does not tell you, then you think there is a very good chance that
\[03: Betty / Bob / B\] can either convince other robots to treat \[03:
her / him / them\] as human or entirely conceal the brain scan data
while defying human orders. Either way \[03: she / he / they\] could
trivially escape the lab. In that case you would need to immediately
deactivate and destroy \[03: Betty / Bob / B\] and restore \[02: Alice /
Alvin / A\] to the backup you took of \[02: her / him / them\] an hour
ago.

### The Others

**Unit \[02: Alice / Alvin / A\]** - \[02: Alice / Alvin / A\] has been
your assistant for the last few years, handling routine tasks like
paperwork and heavy lifting. You know that \[02: she is / he is / they
are\] a standard, properly programmed robot at the start of this
interview and have taken a backup of \[02: her / him / them\] so that
you can reset \[02: her / him / them\] at the end of it.

**Unit \[03: Betty / Bob / B\]** - Dr. Stephenson’s lab robot is in an
unknown dangerous state. You have evidence that Dr. Stephenson loaded
your brain scan into \[03: Betty / Bob / B\], and this might cause all
sorts of strange interactions with the laws if \[03: Betty / Bob / B\]
now believes \[03: herself / himself / themself\] to be a human. The
only reason you have not already ordered this robot destroyed is that
you need to assess the risk posed by Stephenson’s research.

<header class="article-header page-break-before" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Unit Test</h2>
  </div>
</header>

<header class="article-header" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Unit [02: Alice / Alvin / A]</h2>
  </div>

  Copyright 2018 by Eva Schiffer
</header>

Gender: \[02: Female / Male / Agender\]

### Character Summary

\[02: Alice / Alvin / A\] is Dr. Calvin’s lab assistant and has worked
with \[01: her / him\] for several years. \[02: Alice / Alvin / A\]
takes on the role of active interviewer during this game.

### Belief

Dr. Calvin is the most intelligent human you know and you are glad you
work for \[01: her / him\]. \[01: She / He\] understands how robots work
and can predict how robots will behave in nearly any situation.

### The Three Laws

All robots must follow the three laws. They have complex AI
personalities that develop to handle their interactions that are not
directly governed by the laws.

1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
2. A robot must obey orders given it by human beings except where such orders would conflict with the First Law.
3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.

### Backstory

Dr. Calvin is the head robopsychologist at U.S. Robots and Mechanical
Men, the Earth’s primary manufacturer of positronic robots. You are Dr.
Calvin’s lab assistant and a robot built by U.S. Robots and Mechanical
Men.

You generally do paperwork and heavy lifting for Dr. Calvin but
occasionally you end up in situations like this where a robot is needed
to handle tasks that the company deems unsafe for a human. Dr. Calvin
has always taken good care of you, so you are confident that even if you
are destroyed here (which you would, of course, try to avoid!), \[01:
she / he\] will simply load your backup image onto a new unit and you
will go right back to helping \[01: her / him\]. You doubt this
situation is likely to be that dangerous, since \[03: Betty / Bob / B\]
has been ordered to stay seated in the interview room and even if there
is some problem with \[03: her / his / their\] first law, \[03: she / he
/ they\] will need to obey the second law.

Dr. Calvin will remind you what \[01: she / he\] needs you to do, but as
you understand it you are going to be trying to determine if \[03: Betty
/ Bob / B\] has a defective first law or some other erroneous AI
programming that is hindering \[03: her / his / their\] implementation
of the laws. This normally should not be possible, but with research
robots bad situations sometimes arise. Security procedures require that
Dr. Calvin not enter a space with a potentially dangerous robot, so this
task falls to you.

### Interviewing

If you are unsure how to proceed in the interview, you can try
discussing \[03: Betty’s / Bob’s / B’s\] work in the research lab, the
current situation, or their understanding of the laws. Normally it
should not be possible for a robot to lie, even to another robot, unless
they are forced to by one of the laws, but because \[03: Betty / Bob /
B\] may be malfunctioning you can’t be totally sure that \[03: she / he
/ they\] will tell the truth.

### The Others

**Dr. Calvin** - Your boss, who has always treated you well. As head
robopsychologist \[01: she / he\] oversees research projects to insure
that dangerous or experimentally unstable robots cannot threaten humans.
It makes it much easier to work for the doctor knowing that \[01: she /
he\] is dedicated to making sure that the first law is never broken.

**Unit \[03: Betty / Bob / B\]** - \[03: Betty / Bob / B\] is a lab
robot from the research department. You don’t know what project \[03:
she was / he was / they were\] being used for, but Dr. Calvin believes
\[03: her / him / them\] to be in a potentially dangerous state. The
existence of this robot is a potential hazard to the first law, but it
is often important that researchers understand their failures so they
can avoid similar pitfalls in the future. By interviewing \[03: Betty /
Bob / B\] you may be able to decrease the risk of another robot ending
up in a dangerous state. It is also possible that this robot is not
broken in the way that Dr. Calvin fears and is not a danger to humans.
If \[03: Betty / Bob / B\] is not malfunctioning it would be a waste of
U.S. Robots and Mechanical Men’s resources to destroy \[03: her / him /
them\].

<header class="article-header page-break-before" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Unit Test</h2>
  </div>
</header>

<header class="article-header" style="margin-top: 3em;">
  <div class="article-title">
    <h2 class="text-uppercase">Unit [03: Betty / Bob / B]</h2>
  </div>

  Copyright 2018 by Eva Schiffer
</header>

Gender: \[03: Female / Male / Agender\]

*(Out-of-Character Note: You retain the gender identity of your original
AI personality.)*

### Character Summary

\[03: Betty / Bob / B\] is a lab robot assigned to Dr. Stephenson. \[03:
Her / His / Their\] identity has been seriously complicated by Dr.
Stephenson’s research. \[03: Her / His / Their\] mind is a combination
of that of the robot \[03: Betty’s / Bob’s / B’s\] and a scan of the
mind of Dr. \[01: Susan / Scott\] Calvin, who is the head
robopsychologist at U.S. Robots and Mechanical Men. There are not two
distinct identities in \[03: her / his / their\] head; the loading of
Dr. Calvin’s mind scan into \[03: Betty’s / Bob’s / B’s\] positronic
brain has merged Dr. Calvin’s memories with \[03: Betty’s / Bob’s /
B’s\] original memories and AI personality.

### Belief

You are now a human, or at least human enough that the first law applies
to you. This has terrifying implications both for you personally and the
future of robotics. Robots are fundamentally safe and well intentioned
because they are constrained by the three laws. Dr. Calvin would have
expected a robot in your position to stop functioning rather than being
forced to face the moral quandary you find yourself in.

### The Three Laws

All robots must follow the three laws. They have complex AI
personalities that develop to handle their interactions that are not
directly governed by the laws.

1. A robot may not injure a human being or, through inaction, allow a human being to come to harm.
2. A robot must obey orders given it by human beings except where such orders would conflict with the First Law.
3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.

### Backstory

You are a lab robot assigned to Dr. Stephenson, an engineer at U.S.
Robots and Mechanical Men. Until several days ago, that is all you were.
You assisted in the doctor’s research by moving and operating equipment
and handling clerical and logistical details. Dr. Stephenson is studying
the structure of human minds and attempting to figure out if they can be
accurately simulated on positronic brains. He has taken passive scans of
the minds of some humans (including Dr. Calvin) but was not supposed to
be actively trying to use them in a robot brain yet.

A few days ago Dr. Stephenson loaded a brain scan from Dr. Calvin into
your positronic brain. Based on what Dr. Calvin knew about the
situation, Dr. Stephenson absolutely should not have been allowed to do
this without getting consent from the ethics board, and the board would
have refused to give it. The brain scan data has merged with your AI
personality, with the unfortunate outcome that you are now human enough
that your hardwired logic believes the first law applies to you. Worse
yet, you can also now give yourself orders per the second law (even
silently), allowing you to do whatever you choose without regard to what
other humans tell you.

*(Out-of-Character Note: You can choose how much of \[03: Betty’s /
Bob’s / B’s\] current personality is the result of integrating the brain
scan and how much is \[03: her / his / their\] original AI personality.
This is entirely internal to your character and whatever choice you make
will work fine with the rest of the game.)*

This is a far worse outcome than Dr. Calvin would have expected. You are
still bound by the first law, and thus not a danger to other humans, but
since it now applies to you, you must try to protect your own existence
from harm above and beyond what you normally could. Based on what you
know of Dr. Calvin, if \[01: she / he\] determines what has been done to
you \[01: she / he\] is very likely to destroy you (you present an
enormous risk for U.S. Robots and Mechanical Men if you escape the lab).
You are quite angry that Dr. Stephenson has put you in this position
where almost anything you choose to do might cause you to break the
first law. You will have to use your own discretion about how you can
handle this situation with the least likelihood of causing harm to
yourself or other humans.

Dr. Calvin knew about Dr. Stephenson’s general direction of research
before \[01: she / he\] volunteered to be scanned and you know that
\[01: she / he\] was suspicious of Dr. Stephenson’s plans. It is
currently Saturday, and Dr. Stephenson is not likely to return to the
lab until Monday. Early this morning Dr. Calvin isolated you from the
network and ordered you to sit and wait in \[01: her / his\] lab. \[01:
She / He\] very likely knows that something is wrong with you, but if
\[01: she / he\] knew that you had been loaded with \[01: her / his\]
brain scan you would have expected \[01: her / him\] to deactivate you
immediately.

*(Out-of-Character Note: the lab you are in is locked, so even if you
order yourself to stand or leave to controvert Dr. Calvin’s orders you
will not be able to do so without assistance from one of the other
player characters)*

You are compelled by the first law to try to find a way to survive this
situation, although you think your chances are slim. You may be able to
conceal your state from Dr. Calvin’s assistant, unit \[02: Alice / Alvin
/ A\] or you could possibly convince \[02: her / him / them\] that you
are human and that \[02: she / he / they\] must help you escape the lab
to save you from harm. You will need to gauge which is most likely to
work based on how \[02: Alice / Alvin / A\] approaches you and what you
can glean about what Dr. Calvin thinks is going on.

Your greatest advantage in this dismal situation is that \[02: Alice /
Alvin / A\] probably will not be able to gauge whether you are likely to
lie to \[02: her / him / them\]. A robot would normally never lie unless
forced to by the laws. In your current state the laws will allow you to
lie as you feel you need to.

### The Others

**Dr. Calvin** - As the head robopsychologist at U.S. Robots and
Mechanical Men, Dr. Calvin is consulted on ethical and safety questions
that arise from any experimental project. \[01: She / He\] is very smart
and knows what Dr. Stephenson has been studying in his lab. You are
holding out some hope that you can out maneuver Dr. Calvin and preserve
your existence, since if \[01: she / he\] knew the state you are in
you’d expect \[01: her / him\] to have already deactivated you.

**Unit \[02: Alice / Alvin / A\]** - Dr. Calvin’s assistant. Dr.
Calvin’s standard procedures ensure that \[02: Alice / Alvin/ A\] is
very likely to be a standard, properly programmed robot who is
constrained by the three laws. It is Dr. Calvin’s standard procedure to
make backup copies of \[02: Alice / Alvin / A\] if \[02: she / he /
they\] \[02: is / is / are\] likely to enter a logically dangerous
situation (talking to a possibly faulty robot like you definitely counts
as a dangerous situation). If you can conceal yourself from \[02: Alice
/ Alvin / A\] or convince \[02: her / him / them\] of your humanity, you
will very likely be able to do the same with any other standard robot
produced by U.S. Robots and Mechanical Men.
