#!/bin/bash
echo "Ajustando configuração..."
mv serverless.yml serverless.yml.bkp
mv serverless.local.yml serverless.yml
echo "Configuração ajustada!"
echo "Iniciando deploy..."

yarn deploy:local

echo "Deploy finalizado!"
echo "Finalizando configuração..."
mv serverless.yml serverless.local.yml
mv serverless.yml.bkp serverless.yml
echo "Configuração finalizada!"

