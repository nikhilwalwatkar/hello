pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    environment {
        ECR_REGISTRY_URL = '405255119935.dkr.ecr.ap-south-1.amazonaws.com' // Replace with your ECR registry URL
        AWS_REGION = 'ap-south-1' // Replace with your AWS region
        IMAGE_NAME = 'a' // Replace with the name of your Docker image
    }
    stages {
        stage('Install Dependency') {
            steps {
                script {
                    bat 'npm.cmd install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    echo "testing"
                }
            }
        }
        stage('Build Application') {
            steps {
                script {
                    bat 'npm.cmd run build'
                }
            }
        }
        stage('Create Docker Image') {
            steps {
                script {
                    bat 'docker build -t a .'
                }
            }
        }
        stage('Authenticate with ECR') {
            steps {
                script {
                    withCredentials([usernamePassword(passwordVariable: 'AKIAV4WYWMQ7RGOBL3UP', usernameVariable: 'IRSyqGS+mZHAGNnLKfkZLICSiTsjc0zFQn+3A+6O')]) {
                        bat "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY_URL}"
                    }
                }
            }
        stage('image tag') {
            steps {
                script {
                    bat 'docker tag react_devops:latest 405255119935.dkr.ecr.ap-south-1.amazonaws.com/react_devops:latest'
                }
            }
        }
        stage('image push') {
            steps {
                script {
                    bat 'docker tag react_devops:latest 405255119935.dkr.ecr.ap-south-1.amazonaws.com/react_devops:latest'
                }
            }
        }
    }
}
