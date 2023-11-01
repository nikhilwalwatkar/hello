pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
    }
    environment {
        registry = "405255119935.dkr.ecr.ap-south-1.amazonaws.com"
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
                    bat 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 405255119935.dkr.ecr.ap-south-1.amazonaws.com'
                    bat 'docker push 405255119935.dkr.ecr.ap-south-1.amazonaws.com/react_devops:latest'
                    }
                }
            }
        }
    }

