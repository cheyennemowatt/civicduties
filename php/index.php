<?php include "functions.php" ?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Politicians</title>
    </head>
    <body>
        <div class="page">
            <div class="left">
                <select name="categories" id="categories">
                    <option value="">All Politicians</option>
                    <option value="President">President</option>
                    <option value="Governors">Governors</option>
                    <option value="Senators">Senators</option>
                    <option value="Representatives">Representatives</option>
                    <option value="Mayors">Mayors</option>
                    <option value="Councilors-At-Large">Councilors-At-Large</option>
                    <option value="Ward-Councilors">Ward Councilors</option>
                    <option value="Judges">Judges</option>
                </select>
            </div>
            <div class="right">
                <h2>All Politicians</h2>
                <div class="politician-wrapper">
                    
                    <?php 
                        $products = getAllPoliticians();
                        foreach ($politicians as $politician) {
                            ?>
                            <div class="politician">
                                <div class="left">
                                    <img src="<?php echo $politician['image'] ?>" alt="">
                                </div>
                                <div class="right">
                                    <p class="name"><?php echo $politician['name'] ?></p>
                                    <p class="email"><?php echo $politician['email'] ?>€</p>
                                    <p class="description"><?php echo $politician['description'] ?></p>
                                </div>
                            </div>
                            <?php
                        }
                    ?>
            
                </div>
            </div>
        </div>
    <!-- Link to the javascript file -->
    <script src="script.js"></script> 
    </body>
</html>