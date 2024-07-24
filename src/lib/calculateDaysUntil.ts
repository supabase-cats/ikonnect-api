export function calculateDaysUntil(targetDate: Date | string): number {
  const today = new Date();
  const target = new Date(targetDate);

  // 시간 부분을 동일하게 설정하여 전체 일 수 차이만 계산
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  // 밀리초 단위의 차이 계산
  const diffTime = target.getTime() - today.getTime();

  // 밀리초를 일 단위로 변환
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays < 0 ? 0 : diffDays;
}
