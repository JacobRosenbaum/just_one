function Instructions() {
return (
<div>
    <div>
        <b>Just One</b> is a cooperative party game. You all play together to get the best score!

        Together, make one of the players - the active player - guess a Mystery word by secretly writing a clue on your phone.

        Choose your clue without coordinating with each other and be original so as not to write the same clue as another player, as all identical clues will be canceled before the active player gets to see them.

        At the end of the game, tally your score based on the number of Mystery words found.
    </div>
    <br>
    </br>
    <div>
        <b>1. Choose The Mystery Word</b>
        <br>
        </br>
        The active player generates the word without looking at it, and places their phone on their forehead so that all of the other players can see the word.
        Note: If players don't know the chosen word, they can ask the active player to choose a different number.
    </div>
    <br>
    </br>
    <div>
        <b>2. Clue Selection</b>
        <br>
        </br>
        Without communicating with each other and without showing it to anyone each player writes one clue on their easel. That clue must be composed of a single word.
        Note: a digit, a number, an acronym, an onomatopoeia, or a special character are all considered to be words.
        Example: 007 is allowed to help someone guess Bond, just like Riiiiiinnng or SMS are allowed to help someone guess Telephone, and $ is allowed to help someone guess America.
    </div>
    <div>
        <br></br>
        <b>Invalid Clues</b> <br></br>
        <ul>
            <li>The Mystery word but written differently.
                <br></br>
                Example: Shurt is not allowed when trying to make the player guess Shirt.</li>
            <li>The Mystery word written in a foreign language.
                <br></br>
                Example: Buisson is not allowed if the word to be guessed is Shrub.</li>
            <li>A word from the same family as the Mystery word.
                <br></br>
                Example: Princess is not allowed if the word to be guessed is Prince.</li>
            <li>An invented word.
                <br></br>
                Example: Swee'ting is not allowed to try to help someone guess Cake.</li>
            <li>A word phonetically identical to the Mystery word, but the meaning of which is different.
                <br></br>
                Example: Whether is not allowed to try to get someone to guess Weather.</li>
            <li>The Mystery word but written differently.
                <br></br>
                Example: Shurt is not allowed when trying to make the player guess Shirt.
            </li>
            <li>
                The Mystery word written in a foreign language.
                <br></br>
                Example: Buisson is not allowed if the word to be guessed is Shrub.
            </li>
            <li>
                A word from the same family as the Mystery word.
                <br></br>
                Example: Princess is not allowed if the word to be guessed is Prince.
            </li>
            <li>
                An invented word.
                <br></br>
                Example: Swee'ting is not allowed to try to help someone guess Cake.
            </li>
            <li>A word phonetically identical to the Mystery word, but the meaning of which is different.
                <br></br>
                Example: Whether is not allowed to try to get someone to guess Weather.</li>
        </ul>
    </div>
    <div>
        <b>3. Comparing Clues</b> <br></br>
        Once all players have written their clues, the active player closes their eyes.

        During this time, the other players turn their phones around and compare their clue with the other players. All identical or invalid clues are cancelled. To cancel a clue, simply tip put your phone down.
    </div>
    <br></br>
    <div>
        <b>Identical Clues</b> <br></br>
        <ul>
            <li>Two identical words.
                <br></br>
                Example: Mouse and Mouse are identical.</li>
            <li>Variants from the same word family.
                <br></br>
                Example: Prince and Princess are considered to be identical.</li>
            <li>Variants of the same word: plurals, gender differentiations, and spelling mistakes don't count as actual differences.
                <br></br>Example: Prince and Princes, Actor and Actress, Philosophy and Filosofie are identical.
            </li>
        </ul>
    </div>
    <div>
        <b>4. Guess</b> <br></br>
        Once the identical or invalid clues have been cancelled, ask the active player to open their eyes and try to guess the Mystery word with the help of the remaining clues. To do this, they're allowed ONLY ONE GUESS.
    </div>
    <br></br>
    <div>
        <b> End of the Turn</b> <br></br>
        The player to the left of the active player becomes the new active player. A new turn begins.
        <br></br> <br></br>
        Play until you feel like quitting, and tally up your score when you're done. Go Squid!
    </div>
</div>
);
}
export default Instructions;