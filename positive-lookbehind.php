<?php
/**
 * https://www.hackerrank.com/challenges/positive-lookbehind/problem
 */
$Regex_Pattern = '/(?<=[13579])\d/';

$handle = fopen ("php://stdin","r");
$Test_String = fgets($handle);

preg_match_all($Regex_Pattern, $Test_String, $output_array);
printf("Number of matches : %d",count($output_array[0]));
fclose($handle);
?>