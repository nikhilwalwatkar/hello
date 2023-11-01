pipeline {
    agent any
    tools {
        nodejs 'node' // Use the tool name you configured in Jenkins
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
        stage('Auth Docker') {
            steps {
                script {
                    bat 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 405255119935.dkr.ecr.ap-south-1.amazonaws.com'
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
