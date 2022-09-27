SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `delifarma` ;
USE `delifarma` ;

-- -----------------------------------------------------
-- Table `delifarma`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`cliente` (
  `cpf` VARCHAR(15) NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `endereco` VARCHAR(70) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL)
ENGINE = InnoDB

-- -----------------------------------------------------
-- Table `delifarma`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`endereco` (
  `cliente_cpf` VARCHAR(15) NOT NULL,
  `id` INT NOT NULL,
  `endereco` VARCHAR(70) NOT NULL,
  `complemento` VARCHAR(70) NULL DEFAULT NULL,
  `cep` VARCHAR(15) NULL DEFAULT NULL,
  `cidade` VARCHAR(30) NOT NULL,
  `estado` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_endereco_cliente1_idx` (`cliente_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_cliente1`
    FOREIGN KEY (`cliente_cpf`)
    REFERENCES `delifarma`.`cliente` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_cpf` VARCHAR(15) NOT NULL,
  `data` DATETIME NOT NULL,
  `preco_total` DOUBLE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_cliente1_idx` (`cliente_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_cliente1`
    FOREIGN KEY (`cliente_cpf`)
    REFERENCES `delifarma`.`cliente` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`categoria` (
  `id` INT NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`produto` (
  `id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` MEDIUMTEXT NOT NULL,
  `imagem_url` TINYTEXT NOT NULL,
  `quantidade` MEDIUMINT(10) NOT NULL,
  PRIMARY KEY (`id`, `categoria_id`),
  INDEX `fk_produto_categoria1_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_produto_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `delifarma`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`item_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`item_pedido` (
  `pedido_id` INT NOT NULL,
  `produto_id` INT NOT NULL,
  `item_pedido` VARCHAR(45) NOT NULL,
  `quantidade` SMALLINT(10) NOT NULL,
  `preco_unitario` DOUBLE NOT NULL,
  PRIMARY KEY (`pedido_id`, `produto_id`, `item_pedido`),
  INDEX `fk_item_pedido_pedido1_idx` (`pedido_id` ASC) VISIBLE,
  INDEX `fk_item_pedido_produto1_idx` (`produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_item_pedido_pedido1`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `delifarma`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_item_pedido_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `delifarma`.`produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`gerente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`gerente` (
  `user` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`funcionario` (
  `matricula` INT NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`matricula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delifarma`.`login_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`login_cliente` (
  `cliente_cpf` VARCHAR(15) NOT NULL,
  `senha` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`cliente_cpf`, `senha`),
  INDEX `fk_login_cliente_cliente1_idx` (`cliente_cpf` ASC) VISIBLE,
  CONSTRAINT `fk_login_cliente_cliente1`
    FOREIGN KEY (`cliente_cpf`)
    REFERENCES `delifarma`.`cliente` (`cpf`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `delifarma`.`login_funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`login_funcionario` (
  `funcionario_matricula` INT NOT NULL,
  `senha` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`funcionario_matricula`, `senha`),
  INDEX `fk_login_funcionario_funcionario1_idx` (`funcionario_matricula` ASC) VISIBLE,
  CONSTRAINT `fk_login_funcionario_funcionario1`
    FOREIGN KEY (`funcionario_matricula`)
    REFERENCES `delifarma`.`funcionario` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `delifarma`.`login_gerente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delifarma`.`login_gerente` (
  `gerente_user` VARCHAR(65) NOT NULL,
  `senha` VARCHAR(65) NOT NULL,
  PRIMARY KEY (`gerente_user`, `senha`),
  INDEX `fk_login_gerente_gerente1_idx` (`gerente_user` ASC) VISIBLE,
  CONSTRAINT `fk_login_gerente_gerente1`
    FOREIGN KEY (`gerente_user`)
    REFERENCES `delifarma`.`gerente` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
