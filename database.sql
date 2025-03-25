-- Create the database if it doesn't already exist
CREATE DATABASE IF NOT EXISTS logistics_db;
USE logistics_db;

-- Drop the database (commented out for safety)
-- DROP DATABASE logistics_db;
DELIMITER $$

-- Trigger to calculate the total weight of a delivery before insertion
CREATE TRIGGER calculate_poids
BEFORE INSERT ON livraisons
FOR EACH ROW
BEGIN
    DECLARE produit_poids DECIMAL(10, 2);
    -- Fetch the weight of the product being delivered
    SELECT poids INTO produit_poids 
    FROM produits 
    WHERE produits.nome = NEW.produits 
    LIMIT 1;
    -- Calculate the total weight (quantity * product weight)
    SET NEW.poids_total = NEW.quantité * IFNULL(produit_poids, 0);
END$$

-- Trigger to calculate the width of a delivery before insertion
CREATE TRIGGER calculate_largeur
BEFORE INSERT ON livraisons
FOR EACH ROW
BEGIN
    DECLARE produit_largeur DECIMAL(10, 2);
    -- Fetch the width of the product being delivered
    SELECT largeur INTO produit_largeur 
    FROM produits 
    WHERE produits.nome = NEW.produits 
    LIMIT 1;
    -- Set the width of the delivery
    SET NEW.largeur = produit_largeur;
END$$

-- Trigger to calculate the height of a delivery before insertion
CREATE TRIGGER calculate_hauteur
BEFORE INSERT ON livraisons
FOR EACH ROW
BEGIN
    DECLARE produit_hauteur DECIMAL(10, 2);
    -- Fetch the height of the product being delivered
    SELECT hauteur INTO produit_hauteur
    FROM produits 
    WHERE produits.nome = NEW.produits 
    LIMIT 1;
    -- Set the height of the delivery
    SET NEW.hauteur = produit_hauteur;
END$$

-- Trigger to calculate the total thickness of a delivery before insertion
CREATE TRIGGER calculate_épaisseur
BEFORE INSERT ON livraisons
FOR EACH ROW
BEGIN
    DECLARE produit_épaisseur DECIMAL(10, 2);
    -- Fetch the thickness of the product being delivered
    SELECT épaisseur INTO produit_épaisseur
    FROM produits 
    WHERE produits.nome = NEW.produits 
    LIMIT 1;
    -- Calculate the total thickness (quantity * product thickness)
    SET NEW.épaisseur_total = NEW.quantité * IFNULL(produit_épaisseur, 0);
END$$

-- Trigger to update the total weight of a delivery before updating
CREATE TRIGGER update_poids
BEFORE UPDATE ON livraisons
FOR EACH ROW
BEGIN
    DECLARE produit_poids DECIMAL(10, 2);
    -- Fetch the weight of the product being delivered
    SELECT poids INTO produit_poids 
    FROM produits 
    WHERE produits.nome = NEW.produits 
    LIMIT 1;
    -- Recalculate the total weight (quantity * product weight)
    SET NEW.poids_total = NEW.quantité * IFNULL(produit_poids, 0);
END$$

-- Trigger to ensure the total weight of deliveries does not exceed the truck's maximum capacity
CREATE TRIGGER before_insert_livraisons
BEFORE INSERT ON livraisons
FOR EACH ROW
BEGIN
    DECLARE total_poids DECIMAL(10, 2);
    DECLARE poids_max_camion DECIMAL(10, 2);
    -- Fetch the maximum weight capacity of the truck
    SELECT poids_max INTO poids_max_camion
    FROM camions
    WHERE matrecul = NEW.Matricule;
    -- Calculate the total weight of all deliveries for the truck
    SELECT SUM(poids_total) INTO total_poids
    FROM livraisons
    WHERE Matricule = NEW.Matricule;
    -- Add the new delivery's weight to the total
    SET total_poids = total_poids + NEW.poids_total;
    -- If the total weight exceeds the truck's capacity, raise an error
    IF total_poids > poids_max_camion THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insertion failed: Total poids_total exceeds poids_max of the camion.';
    END IF;
END$$

-- Reset the delimiter to the default
DELIMITER ;