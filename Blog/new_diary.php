<?php
include('_header.php');

$dataFile = 'message.dat';


if ($_SERVER['REQUEST_METHOD'] == 'POST' && 
    isset($_POST['title']) &&
    isset($_POST['text'])) {

    $title = trim($_POST['title']);
    $text = trim($_POST['text']);

    if ($title !== '') {
        
        // $title = str_replace("\t", ' ', $title);
        // $text = str_replace("\t", ' ', $text);

        $postedAt = date('Y-m-d H:i');

        $newData = $title . "\t" . $text . "\t" . $postedAt . "\n" ;

        $fp = fopen($dataFile, 'a');
        fwrite($fp, $newData);
        fclose($fp);
    }
}

?>
    <br><br><br><br><br>
    <h2>投稿完了</h2>
        <div class="back-btn">
            <br><a href="diary.php" class="btn">戻る</a>
        </div>


<!-- <div class="form-wrapper">
    <form @submit.prevent="addItem">
        <label>タイトル<br><input v-model="newTitle" type="text"></label><br>
        <span v-show="error1">※タイトルを入力してください</span><br>
        <lavel>本文<br><textarea v-model="newText"></textarea></lavel><br>
        <span v-show="error2">※内容を入力してください</span><br>
        <input type="submit" value="投稿">
    </form>
</div> -->
     <!-- <div class="form-wrapper">
        <form method="POST">
            <div>
                <label for="view_title">タイトル</label><br>
                <input id="view_title" name="view_title" value="" type="text"><br>
                <span v-show="error1">※タイトルを入力してください</span><br>
            </div>
            <div>
                <lavel for="text">本文</label>
                <textarea id="text" name="message"></textarea></lavel><br>
                <span v-show="error2">※内容を入力してください</span><br>
                <input type="submit" name="btn_submit" value="投稿">
            </div>
        </form>
    </div> -->



<?php

include('_footer.php');