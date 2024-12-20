# Django Task Manager (장고 할일 관리)

## 프로젝트 소개
- 장고 REST 프레임워크를 통해 Backend 서버를 구축하고,
- React를 통해 Frontend를 구축하는 프로젝트입니다.

## 프로젝트 목표
- DRF를 사용하는 법을 익힙니다.
- React 등 Frontend가 어떻게 서버와 통신하는 지를 익힙니다.

## 프로젝트 구조
```text
backend/
    tasks_project/  # 태스크 프로젝트
    tasks/  # 태스크 목록 앱
    manage.py  # 장고 관리 manage.py 파일
    requirements.txt  # 파이썬 패키지 목록
frontend/
    src/  # 프론트엔드 소스 코드
        App.js  # 프론트엔드 메인 컴포넌트
        App.css  # 프론트엔드 메인 스타일
        index.js  # 프론트엔드 메인 진입점
    public/  # 이미지 등 정적 파일
    package.json  # 패키지 목록
```

## 프로젝트 실행 방법
### Backend 실행 방법
```bash
cd backend
python manage.py runserver
```

### Frontend 실행 방법
```bash
cd frontend
npm start
```

## 환경 세팅 방법
### Backend 환경 세팅 방법
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Frontend 환경 세팅 방법
```bash
cd frontend
npm install
```
