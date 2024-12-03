<?php
$conn = null;
$conn = checkDbConnection();
$recipe = new Recipe($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("recipeid", $_GET)) {
    checkPayload($data);

    $recipe->recipe_aid = $_GET['recipeid'];
    $recipe->recipe_title = checkIndex($data, "recipe_title");
    $recipe->recipe_choices = json_encode($data["recipe_choices"]);

    $recipe->recipe_datetime = date("Y-m-d H:i:s");
    $recipe_title_old = strtolower($data["recipe_title_old"]);
    // checkId($recipe->recipe_aid);
    compareName($recipe, $recipe_title_old, $recipe->recipe_title);

    $query = checkUpdate($recipe);
    returnSuccess($recipe, "recipe", $query);
}

checkEndpoint();