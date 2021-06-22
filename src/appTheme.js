const baseSpacingUnit = '8px';

export const theme = {
  colors: {
    baseText: '#f5f5f5',
  },
  spacing: {
    u0: baseSpacingUnit / 2,
    u1: baseSpacingUnit,
    u2: baseSpacingUnit * 2,
    u3: baseSpacingUnit * 3,
    u4: baseSpacingUnit * 4,
  },
  fontSize: {
    xs: 10,
    sm: 12,
    base: 14,
    lg: 19,
    xl: 24,
    xxl: 32,
  },
};

export const titleStyle = {
  fontWeight: 'bold',
  fontSize: 36,
  lineHeight: '45px',
  marginBottom: 4,
};

export const subtitleStyle = {
  color: '#999',
  fontWeight: '500',
  marginBottom: 4,
};

export const pillStyle = {
  fontSize: '12px',
  marginRight: '4px',
  marginBottom: '8px',
  padding: '0 8px',
  backgroundColor: '#777',
  borderRadius: 100,
  fontWeight: '700',
};
