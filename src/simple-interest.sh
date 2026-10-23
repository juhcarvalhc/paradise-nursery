#!/bin/bash
# Este script calcula o juros simples com base no principal, taxa de juros anual e tempo em anos.
# Fórmula: Juros Simples (Simple Interest) = (Principal * Taxa * Tempo) / 100

echo "=== Calculadora de Juros Simples ==="

# Solicita a entrada do usuário
read -p "Digite o valor principal (montante inicial): " principal
read -p "Digite a taxa de juros anual (em %): " taxa
read -p "Digite o período de tempo (em anos): " tempo

# Calcula os juros simples usando bc para permitir decimais
juros=$(echo "scale=2; ($principal * $taxa * $tempo) / 100" | bc)
total=$(echo "scale=2; $principal + $juros" | bc)

echo "-----------------------------------"
echo "O valor dos juros simples é: $juros"
echo "O montante total (Principal + Juros) é: $total"
