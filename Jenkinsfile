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
                    bat "npm.cmd run test"
                }
            }
        }
        stage('Build Application') {
            steps {
                script {
                    bat 'src\jenkins\scripts\test.sh'
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
        stage('Pushing image to ECR') {
            steps {
                script {
                    withEnv (["AWS_ACCESS_KEY_ID=${env.Access_key_ID}", "AWS_SECRET_ACCESS_KEY=${env.Secret_access_key}", "AWS_DEFAULT_REGION=${env.aws_region}"]){
                    bat 'aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 405255119935.dkr.ecr.ap-south-1.amazonaws.com'
                    bat 'docker tag a:latest 405255119935.dkr.ecr.ap-south-1.amazonaws.com/react_devops:latest'
                    bat 'docker push 405255119935.dkr.ecr.ap-south-1.amazonaws.com/react_devops:latest'
                    }
                    }
                }
            }
        }
}

