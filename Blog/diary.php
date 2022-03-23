<?php
include('_header.php');

$dataFile = 'message.dat';

function h($s) {
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

$posts = file($dataFile,FILE_IGNORE_NEW_LINES);
$posts = array_reverse($posts);

?>

<div class="form-wrapper">
    <form action="new_diary.php" method="post">
        <label>タイトル<br><input type="text" name="title"></label><br><br>
        <label>本文<br><input type="text" name="text" id="text-box"></label>
        <br><input type="submit" value="書き込む">
    </form>
</div>

<h2>投稿一覧（<?php echo count($posts); ?>件）</h2>
    <div class="diary-list">
        <ul>
        <?php if (count($posts)) : ?>
            <?php foreach ($posts as $post) : ?>
            <?php list($title, $text, $postedAt) = explode("\t", $post); ?>
                <li>
                    <h3><?php echo h($title); ?><span><?php echo h($postedAt); ?></span></h3>
                    <br><?php echo h($text); ?>
                </li>
            <?php endforeach; ?>
            <?php else : ?>
            <li class="no-text">
                <br><br>まだ投稿はありません。
            </li>
            <?php endif; ?>
        </ul>
    </div>

<?php

include('_footer.php');

