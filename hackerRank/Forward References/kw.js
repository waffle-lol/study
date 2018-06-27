//https://www.hackerrank.com/challenges/forward-references

$Regex_Pattern = '/^(\2\2|\2tic|(tac))+$/';
//Do not delete '/'. Replace __________ with your regex. 
//$test = preg_grep( $Regex_Pattern, ['tactactictactictictac'] );
$test = preg_grep( $Regex_Pattern, ['tactactic'] );

//var_dump( $test );
