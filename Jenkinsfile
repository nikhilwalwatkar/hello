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
        stage('Testing') {
            steps {
                script {
                        echo "testing running"
                }
            }
        }
        stage('build') {
            steps {
                script {
                       bat 'npm.cmd run build'
                }
            }
        }
        stage('imaging') {
            steps {
                script {
                       bat 'docker build -t myapp:1.0 Dockerfile'
                }
            }
        }
    }
}

