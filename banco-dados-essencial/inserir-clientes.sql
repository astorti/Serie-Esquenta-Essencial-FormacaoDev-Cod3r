INSERT INTO cliente (id,nome, salario, pontos, administrador, data_inclusao) 
VALUES (1,'Harry Potter', 3500.00, 50, TRUE, NOW());

INSERT INTO cliente (id, nome, salario, pontos, administrador, data_inclusao) 
VALUES 
    (2, 'Sherlock Holmes', 2500.00, 28, FALSE, NOW()),
    (3, 'Hercule Poirot', 4200.00, 35, TRUE, NOW()),
    (4, 'Luke Skywalker', 3200.00, 27, FALSE, NOW());

SELECT * FROM cliente;