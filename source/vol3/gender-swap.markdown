---
layout: vol3
content_type: text/html
title: "A Software Approach to Flexibly and Concretely Gendered Characters"
---

<header class="article-header">
  <div class="topline-widget">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
  </div>

  <div class="article-title">
    <h2 class="text-uppercase">A Software Approach to Flexibly and Concretely Gendered Characters</h2>
  </div>
  by Eva Schiffer
</header>

In the summer of 2012 I began working with Kathleen De Smet on a game
idea that evolved into the larp *Storm Cellar*. Both of us felt strongly
that the characters in the game should be available in male and female
forms. Unfortunately, we had no tools to help us, and with an eight
player game including complex, pre-written backstory the work involved
in swapping character genders manually quickly becomes an untenable
nightmare.

In September of 2012 I put together the first version of a computer
program called Gender Swap to flexibly and concretely gender larp
characters. Initially it was a command line python script. Over time it
became more sophisticated and grew to include a graphical user interface
(GUI). Eventually I built pre-packaged application versions of Gender
Swap for MacOS and Windows.

The python code and packaged versions of Gender Swap are available for
free via GitHub: [https://github.com/valleyviolet/gender\_swap](https://github.com/valleyviolet/gender_swap)

### Why?

There are many ways to approach player character gender in larps.[^1]
The most common ones being used in games with pre-written characters
when I began work on Gender Swap were: *have fixed genders for each
player character* or *specify all materials for a player character using
neutral pronouns (generally the singular they) and then tell players to
treat that character as a specific gender that matches the preferences
of whomever you cast them to*.

The first approach of having only fixed gender characters is
**concrete**, but **not flexible**. It can make casting very unpleasant,
as players often have strong preferences about gender and it’s pure luck
whether the concrete genders of the characters you have will match the
themes and plots your players want to engage with. Fixed gender
characters can also be frustrating as a player. If you have strong
preferences about gender, you will often be limited in the sorts of
stories, roles, and themes you are offered.

The second approach of using all neutral pronouns for gendered
characters is **flexible** but **not concrete**. It can feel artificial
and impersonal, as you are presented with characters who have gender,
but are not discussed in the game materials as if they have gender. As a
writer, it also precludes approaching a wide range of material that has
different cultural connotations based on character gender.

Some writers have slightly improved on the second approach, by
encouraging players to build more gendered stories and relationships
after casting.[^2] This allows for more gendered material in the game,
but puts a high creative burden on the players. Unfortunately this
strategy still precludes the writer choosing which material related to
gender is included in their game. It can also be less queer-friendly
than I would personally prefer.[^3]

I created Gender Swap as a tool to help writers find a middle ground
between these approaches. It lets you both have **concrete** gendered
material in your game, and be more **flexible** about the genders of
your characters. Gender Swap lets you choose which genders are possible
for which characters, including having some fixed gender characters and
some flexibly gendered ones if you don’t want to go as far as making all
your characters flexible in gender.[^4] When you’re using they pronouns
for a character it can be because they have a non-binary gender identity
in this run of your game, not because you have no other practical
choice.

### How It Works

At its heart Gender Swap is a relatively simple tool for choosing gender
related text in your game materials[^5] using a simple markup
language[^6]. Each character with flexible gender is configured with a
list of possible genders. As you write your game you use markup language
to specify versions of gendered text for each of those possible genders.

There are only a few, simple patterns you need to know to use Gender
Swap.

#### Configuring Possible Genders[^7]

The first pattern is how to describe the possible genders for the
characters in your game. This information is stored in a separate plain
text configuration file. The contents of this file will look something
like the following:

```
Dr Calvin: 01: female/male:              Female
Unit A:    02: female/male/neutral they: Male
Unit B:    03: female/male/neutral they: They
```

<img class="text-clip gender-swap-logo" src="/vol3/images/gender-swap-logo.svg" />

This file has one line for each character whose gender you want to be
able to change, with sections on each line separated by colons (“:”).
The first section is a descriptive name so you can keep track of which
line is for which character (Dr Calvin, Unit A, or Unit B in the
example). The second section is a two digit character number that you
will use to specify this character in the markup language (01, 02, or 03
in the example). The third section is a list of the possible genders for
this character, in the order you will write them in the markup
(“female/male”, or “female/male/neutral they” in the example).[^8]

The final section of a line represents the gender this character will be
given when you use Gender Swap to process your materials (Female, Male,
or They in the example). This final section is likely to change each
time you run your game, since it reflects the genders that will be used
for the characters in that run. The earlier sections of the line will
not change unless you rewrite your game to allow characters to be
different possible genders or to change character names.

#### Gendering In Game Materials

In your game materials, at any point where the text can change based on
a character’s gender you use a construction like the following:

```
[02: she is / he is / they are]
```

The entire chunk of text for Gender Swap to modify is enclosed in square
brackets (ie. “\[ \]”). The first section is the two digit character
number for the character this text depends on. In this case 02
corresponds to Unit A, so which section of text Gender Swap choses will
depend on Unit A’s gender for this run. The character number is followed
by a colon (“:”) and then the different text options for each of the
character’s possible genders, separated by slashes (“/”).[^9]

In this example, the entire chunk of text “\[02: she is / he is / they
are\]” will be replaced with “she is” when the character is female, “he
is” when the character is male, or “they are” when the character is
gender neutral and uses they pronouns.

Gender Swap can be used in a similar manner to swap gendered
relationship terms such as mother/father/parent, wife/husband/spouse,
and niece/nephew/nibbling, or gendered job titles like actress/actor.

More complex examples can include multi-line sections of text or empty
sections.

```
The field of robotics was in its infancy when you were in school[01: and you were the only woman in any of your classes / ].
```

In this case the final text would read “The field of robotics was in its
infancy when you were in school and you were the only woman in any of
your classes.” if Dr Calvin is female or “The field of robotics was in
its infancy when you were in school.” if Dr Calvin is male.

Gender Swap can also optionally gender file names.[^10] Simply start
with the character number and list the possible gendered text separated
by periods (“.”).

```
02.Unit Alice.Unit Alvin.Unit A.rtf
```

This file will become “02.Unit Alice.rtf” if the character is female,
“02.Unit Alvin.rtf” if the character is male, or “02.Unit A.rtf” if the
character is gender neutral and uses they pronouns. If Gender Swap has
been told to gender file names and sees a file that does not match the
pattern it expects it will just use the original file name without
modifying it.

#### Processing Your Marked Up Files

Once you have a configuration file specifying your characters’ genders
and have written the game materials using the markup language, there are
two ways to process your files using Gender Swap to set concrete genders
for a run of your game. If you are comfortable downloading and running
code from GitHub and want to have access to Gender Swap’s code to
potentially debug your own problems, you may want to run the program
from the command line. If that sounds like way too much work or you just
don’t care to look at the code, you will probably want to download a
pre-built and packaged application version of Gender Swap and use the
graphical user interface (GUI).

#### Command Line Use

If you want to run Gender Swap from the command line, download the code
from GitHub and make sure you have an appropriate version of Python[^11]
installed. Then run the following command from the command line in the
gender\_swap/source directory, replacing `<>` parts with the correct
file paths for your game.

```bash
python -m gender_swap swap -g <the path to the text configuration file> -i <the path to the input files to gender> -o <the path where it should put the output>
```

Gender Swap will place concretely gendered copies[^12] of your input
files in the output directory you specified. If you have input files in
more than one directory for Gender Swap to gender you will need to run
the command multiple times, changing the input path.

#### The GUI

If you would rather use the GUI you can either download and run a
pre-packaged Gender Swap application or start the GUI from the command
line.[^13]

In the GUI, click the “Load Gender List” button on the “Gender
Definitions” tab and select your configuration file to load. Verify that
the character genders you expected are loaded into the table on that
tab. If not, double check that they are set correctly in the
configuration file.

Open the “Files and Processing” tab and click the “Load Files” button.
Select the documents you want to gender. You should be able to select
multiple items by holding shift and you can continue using the “Load
Files” button to add documents from different directories if you need
to.

Verify that the files you want to gender are loaded in the list. Click
the “Select” button and select an output directory (preferably somewhere
outside the gender\_swap directory structure).

Check the “also process file names to gender them” checkbox if you want
to gender the file names. Finally, click the “Process” button.

Concretely gendered copies of your files should now be present in the
output directory.[^14]

#### Caveats

The program understands four possible “genders”: female, male, neutral
they, and neutral ze. Gender Swap currently expects each of those to map
to using one set of pronouns (she/her pronouns for female, he/him
pronouns for male, they/them pronouns for the neutral they, and ze/zir
pronouns for neutral ze). You can put whatever text you like within the
markup in your game materials, but Gender Swap will issue warnings based
on whether you used the pronouns it expects for the gender you
specified. In the future I hope to expand Gender Swap to understand user
configurable genders so it is simpler to use custom, less traditional
pronoun sets.

Gender Swap can process files that are plain text (.txt) or rich text
format (.rtf). I’m hoping to eventually expand to processing html, to
allow writers more layout options than rich text allows.

Gender Swap doesn’t understand the details of how rich text formatting
works, so you will need to be careful to use formatting either within
only one section of the gendered text or across the entire
expression.[^15] If you use formatting like \[01: **Susan / Scott**\]
across the separating slash, the formatting in your concretely gendered
file will behave incorrectly. Instead, bold across the whole expression
(**\[01: Susan / Scott\]**) or inside each section but not across the
slash (\[01: **Susan** / **Scott**\]).

Unfortunately, not all rich text editors are created equal. Most
notably, the rich text export from Google Docs is (at the time of
writing) technically correct but the resulting files are internally a
hot mess that Gender Swap can’t read correctly.[^16] Re-saving Google
Docs RTF exports using TextEdit, Word, or almost any other RTF editor
will coerce them into a less awful format that Gender Swap can handle.

### Conclusion

Obviously not all characters can be gender swapped meaningfully,[^17]
but hopefully Gender Swap will give you one more tool and one more
strategy for approaching gender when writing and running larps.

I’ve worked on many larps[^18] that use Gender Swap to gender player
characters since I first created it in 2012. Having this tool made
creating flexible but concretely gendered characters an interesting
writing exercise rather than a logistical nightmare. Seeing what new
combinations of character genders bring to these games each time I run
them is fascinating and casting them is far easier than casting games
with fixed gender characters.

[^1]: This article focuses on games with pre-written player characters
    who are cast to specific players each time the game is run.
    Generally the person running the game decides how to cast the
    players to characters based on player preferences, including
    preferences for character gender. There are obviously other
    strategies to making and casting player characters, like having
    players create them collaboratively at the beginning of each run of
    a game, but you don’t need Gender Swap for that!

[^2]: I have seen game facilitators encourage players to add more
    strongly gendered elements to their characters both through
    workshops directly before the game and through collaborative online
    interaction significantly earlier.

[^3]: Maury Brown discusses problems and strengths of these approaches
    at
    [http://analoggamestudies.org/2015/09/the-trouble-with-gender-in-larp/](http://analoggamestudies.org/2015/09/the-trouble-with-gender-in-larp/).

[^4]: I generally use Gender Swap to set genders for player characters.
    The program doesn’t care who you’re gendering though, so if you want
    to have flexibly gendered non-player characters or even flexibly
    gendered characters who appear only in backstory, you can.

[^5]: Most of your flexible character gendering is likely to be on your
    character sheets, but if you have informational handouts or other
    materials that need to change based on character gender they can be
    written and processed in the same way.

[^6]: A markup language is just a way of writing your text so a computer
    can easily tell what you want the computer to do with it. In this
    case, the markup language lets the computer distinguish what
    different text you want depending on how you’ve set a character’s
    gender.

[^7]: Gender Swap’s current documentation conflates gender and pronoun
    usage somewhat, primarily because pronouns are the most common thing
    that the program swaps. Gender and pronouns can obvious be much more
    complex and varied than simple non-overlapping categories. In the
    long run I want Gender Swap to be more configurable to support
    writing more complexity and diversity in gender and pronouns but
    this article focuses primarily on what the tool does now, not on
    what I hope to do with it someday.

[^8]: I find it easiest to put the possible genders in the same order
    for each character, so I don’t need to refer to the configuration as
    often while writing the markup in a game. When I started using
    Gender Swap I decided to always put female first on this list,
    because it disrupts the ordering my brain expects, and therefore
    encourages me to pay more attention to what I’m writing. The Gender
    Swap program doesn’t care what order you put the possible genders
    in, so you can use any order you prefer.

[^9]: Currently there is no way to escape a forward slash inside the
    gendered section of the markup language, so it is the one character
    you can’t use there.

[^10]: This is most useful for character sheet names since they are
    likely to be seen by players.

[^11]: At the time of writing, Gender Swap works best with Python 2.7.

[^12]: Your original input files will be left where they are and as they
    are.

[^13]: You will need to have PyQt4 installed to use the GUI from the
    command line. You can start the GUI with the command: python -m
    gender\_swap gui

[^14]: If anything goes wrong, errors and warnings should be displayed
    in the command line interface window. In all but the most
    catastrophic of cases, Gender Swap should produce output files even
    if something goes wrong.

[^15]: RTF files use start and end tags for text formatting (much like
    html) that are invisible in an RTF editor. When you bold across a
    slash, Gender Swap will use only text from one side of the slash
    when gendering the file and either the start or end tags for the
    bold formatting will be thrown away. I occasionally end up with many
    pages of a character sheet in accidental bold because I did this
    wrong.

[^16]: For some reason Google Docs thinks it’s appropriate to re-issue
    all formatting tags for every single word in the RTF export. This
    interferes with Gender Swap’s ability to detect the markup language
    and makes the files absolutely huge compared to a well formatted RTF
    file.

[^17]: There will always be games like *Mad About the Boy* where the
    material you’re approaching as a designer needs one specific gender
    or another.

[^18]: Games I have used Gender Swap for include *Storm Cellar*, *Better
    Living Through Robotics*, *Interplanetary Federation - The Cadet
    Years*, *Grandma’s Resting Place*, *Fire in Cambria*, *Peace, Land,
    and Bread!* and *Unit Test*. *Unit Test* is available in this volume
    of *Game Wrap* or from the Gender Swap GitHub project if you would
    like to see an example of what a game written to use Gender Swap
    looks like before it is concretely gendered.
