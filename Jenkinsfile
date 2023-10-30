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
                    bat 'docker build -t A .'
                }
            }
        }
    }
}
