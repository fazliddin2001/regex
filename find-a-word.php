<?php
/**
 * https://www.hackerrank.com/challenges/find-a-word/problem
 */
$_fp = fopen("php://stdin", "r");
$arr = "";
for($i = (int)fgets($_fp); $i--;){
    $arr .= fgets($_fp);
}
for($i=(int)fgets($_fp); $i--;){
    $s = trim(fgets($_fp));
    preg_match_all("/\b$s\b/", $arr, $match);
    echo count($match[0]) . "\n";
}
?>
