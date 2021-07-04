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

export const largeTitleStyle = {
  fontWeight: 'bold',
  fontSize: 36,
  lineHeight: '45px',
  marginBottom: 4,
};

export const titleStyle = {
  color: '#00cccc',
  fontWeight: '900',
  fontSize: 64,
  lineHeight: '64px',
  marginBottom: 4,
};

export const subtitleStyle = {
  color: '#009999',
  textTransform: 'uppercase',
  fontSize: 12,
};

export const pillStyle = {
  fontSize: '12px',
  marginRight: '4px',
  marginBottom: '8px',
  padding: '4px 12px',
  backgroundColor: '#777',
  borderRadius: 100,
  fontWeight: '700',
  color: 'white',
  borderWidth: 0,
};
