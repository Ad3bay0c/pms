export default function Logo() {
  return (
    <div style={{ position: 'absolute', height: 43, }}>
      <div>
        <svg
        style={{
            top: '8px',
            position: 'absolute',
            zIndex: '10',
            marginLeft: '22px',
        }}
          width="73"
          height="27"
          viewBox="0 0 73 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.672 26C1.432 26 1.228 25.916 1.06 25.748C0.892 25.58 0.808 25.376 0.808 25.136V1.7C0.808 1.436 0.88 1.22 1.024 1.052C1.192 0.883999 1.408 0.799998 1.672 0.799998H11.32C14.2 0.799998 16.468 1.484 18.124 2.852C19.78 4.196 20.608 6.176 20.608 8.792C20.608 11.408 19.78 13.388 18.124 14.732C16.492 16.052 14.224 16.712 11.32 16.712H5.956V25.136C5.956 25.376 5.872 25.58 5.704 25.748C5.56 25.916 5.356 26 5.092 26H1.672ZM11.14 12.716C12.532 12.716 13.6 12.392 14.344 11.744C15.088 11.072 15.46 10.088 15.46 8.792C15.46 7.544 15.1 6.572 14.38 5.876C13.66 5.156 12.58 4.796 11.14 4.796H5.884V12.716H11.14Z"
            fill="white"
          />
          <path
            d="M25.4385 26C25.1745 26 24.9585 25.928 24.7905 25.784C24.6225 25.616 24.5385 25.4 24.5385 25.136V1.7C24.5385 1.436 24.6225 1.22 24.7905 1.052C24.9585 0.883999 25.1745 0.799998 25.4385 0.799998H28.2825C28.7865 0.799998 29.1465 1.028 29.3625 1.484L36.3105 14.444L43.3305 1.484C43.5705 1.028 43.9305 0.799998 44.4105 0.799998H47.2185C47.4825 0.799998 47.6985 0.883999 47.8665 1.052C48.0345 1.22 48.1185 1.436 48.1185 1.7V25.136C48.1185 25.4 48.0345 25.616 47.8665 25.784C47.6985 25.928 47.4825 26 47.2185 26H44.1945C43.9545 26 43.7505 25.916 43.5825 25.748C43.4145 25.58 43.3305 25.376 43.3305 25.136V9.548L38.2905 19.16C37.9785 19.688 37.5705 19.952 37.0665 19.952H35.5905C35.0865 19.952 34.6785 19.688 34.3665 19.16L29.3265 9.548V25.136C29.3265 25.376 29.2425 25.58 29.0745 25.748C28.9305 25.916 28.7265 26 28.4625 26H25.4385ZM62.4662 26.36C60.3302 26.36 58.4942 26.036 56.9582 25.388C55.4222 24.74 54.2582 23.888 53.4662 22.832C52.6742 21.776 52.2542 20.636 52.2062 19.412C52.2062 19.196 52.2782 19.016 52.4222 18.872C52.5662 18.728 52.7462 18.656 52.9622 18.656H56.1662C56.4542 18.656 56.6702 18.716 56.8142 18.836C56.9822 18.932 57.1382 19.1 57.2822 19.34C57.5222 20.156 58.0742 20.84 58.9382 21.392C59.8022 21.944 60.9782 22.22 62.4662 22.22C64.1702 22.22 65.4542 21.944 66.3182 21.392C67.1822 20.816 67.6142 20.024 67.6142 19.016C67.6142 18.344 67.3862 17.792 66.9302 17.36C66.4982 16.928 65.8382 16.556 64.9502 16.244C64.0862 15.932 62.7902 15.548 61.0622 15.092C58.2302 14.42 56.1542 13.532 54.8342 12.428C53.5382 11.3 52.8902 9.704 52.8902 7.64C52.8902 6.248 53.2622 5.012 54.0062 3.932C54.7742 2.852 55.8662 2 57.2822 1.376C58.7222 0.751999 60.3902 0.439999 62.2862 0.439999C64.2542 0.439999 65.9582 0.787998 67.3982 1.484C68.8382 2.18 69.9302 3.056 70.6742 4.112C71.4422 5.144 71.8502 6.176 71.8982 7.208C71.8982 7.424 71.8262 7.604 71.6822 7.748C71.5382 7.892 71.3582 7.964 71.1422 7.964H67.7942C67.2902 7.964 66.9422 7.736 66.7502 7.28C66.6062 6.512 66.1262 5.876 65.3102 5.372C64.4942 4.844 63.4862 4.58 62.2862 4.58C60.9422 4.58 59.8862 4.832 59.1182 5.336C58.3502 5.84 57.9662 6.572 57.9662 7.532C57.9662 8.204 58.1582 8.756 58.5422 9.188C58.9262 9.62 59.5262 10.004 60.3422 10.34C61.1822 10.676 62.3822 11.048 63.9422 11.456C66.0542 11.936 67.7342 12.476 68.9822 13.076C70.2542 13.676 71.1902 14.432 71.7902 15.344C72.3902 16.256 72.6902 17.42 72.6902 18.836C72.6902 20.372 72.2582 21.716 71.3942 22.868C70.5542 23.996 69.3542 24.86 67.7942 25.46C66.2582 26.06 64.4822 26.36 62.4662 26.36Z"
            fill="#343957"
          />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          background: "black",
          height: "39px",
          width: "42.47px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}